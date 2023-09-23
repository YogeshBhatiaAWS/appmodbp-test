"appingress": {
    annotations: {}
    attributes: {
        appliesToWorkloads: []
        conflictsWith: []
        podDisruptive:   false
        workloadRefPath: ""
    }
    description: "Ingress route trait."
    labels: {}
    type: "trait"
}

template: {
    parameter: {
        domain: string
        http: [string]: int
        class: *"alb" | string
        targetType: *"ip" | string 
        type: *"internet-facing" | "internal"
    }

  // trait template can have multiple outputs in one trait
    outputs: service: {
        apiVersion: "v1"
        kind:       "Service"
        metadata: name: context.name
        spec: {
            selector: "app.oam.dev/component": context.name
            ports: [
                for k, v in parameter.http {
                    port:       v
                    targetPort: v
                },
            ]
        }
    }

    outputs: ingress: {
        apiVersion: "networking.k8s.io/v1"
        kind:       "Ingress"
        metadata: {
            name: context.name
            annotations: {
                "alb.ingress.kubernetes.io/target-type": parameter.targetType 
                "alb.ingress.kubernetes.io/scheme": parameter.type
                "alb.ingress.kubernetes.io/group.name": parameter.type
            }
        }
        spec: {
            ingressClassName: parameter.class
            rules: [{
                host: parameter.domain
                http: {
                    paths: [
                        for k, v in parameter.http {
                            path: k
                            pathType: "ImplementationSpecific"
                            backend: {
                                service: {
                                    name: context.name
                                    port: number: v
                                }
                            }
                        },
                    ]
                }
            }]
        }
    }

    patch: {
        metadata: annotations: {
            "argocd.argoproj.io/compare-options": "IgnoreExtraneous"
            "argocd.argoproj.io/sync-options": "Prune=false"
        }
    }

    patchOutputs: {
        for k, v in context.outputs {
            "\(k)": {
                metadata: annotations: {
                    "argocd.argoproj.io/compare-options": "IgnoreExtraneous"
                    "argocd.argoproj.io/sync-options":    "Prune=false"
                }
            }
        }
        service: {
            metadata: annotations: {
                "argocd.argoproj.io/compare-options": "IgnoreExtraneous"
                "argocd.argoproj.io/sync-options": "Prune=false"
            }
        }
        ingress: {
            metadata: annotations: {
                "argocd.argoproj.io/compare-options": "IgnoreExtraneous"
                "argocd.argoproj.io/sync-options": "Prune=false"
            }
        }

    }
}