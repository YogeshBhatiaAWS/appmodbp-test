import { GitOpsApplicationDeployment, GitRepositoryReference, Values } from '../../spi';
/**
 * Argo Application is a utility class that can generate an ArgoCD application
 * from generic GitOps application properties.
 */
export declare class ArgoApplication {
    private readonly bootstrapRepo;
    constructor(bootstrapRepo: GitRepositoryReference | undefined);
    generate(deployment: GitOpsApplicationDeployment, syncOrder?: number): {
        apiVersion: string;
        kind: string;
        metadata: {
            name: string;
            namespace: string;
            annotations: {
                "argocd.argoproj.io/sync-wave": string;
            };
        };
        spec: {
            destination: {
                namespace: string | undefined;
                server: string;
            };
            project: string;
            source: {
                helm: {
                    valueFiles: string[];
                    parameters: {
                        name: string;
                        value: string;
                    }[];
                };
                path: string | undefined;
                repoURL: string;
                targetRevision: string;
            };
            syncPolicy: {
                automated: {
                    prune: boolean;
                    selfHeal: boolean;
                    allowEmpty: boolean;
                };
            };
        };
    };
    /**
     * Creates an opinionated path.
     * @param name
     * @returns
     */
    generateDefaultRepo(name: string): GitRepositoryReference;
    /**
     * Iterate an argo Values object to normalize the string format before sending to argocd.
     * For example, escaping the dot from certain keys: "ingress.annotations.kubernetes\\.io/tls-acme"
     * @param values
     * @returns
     */
    normalizeValues(obj: Values): Values;
}
