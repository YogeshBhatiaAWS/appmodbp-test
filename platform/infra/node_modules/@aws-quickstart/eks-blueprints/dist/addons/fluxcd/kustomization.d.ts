import * as spi from "../../spi";
/**
 * Flux Kustomization API defines a pipeline for fetching, decrypting, building, validating and applying Kustomize overlays or plain Kubernetes manifests.
 */
export declare class FluxKustomization {
    constructor();
    generate(name: string, repoName: string, namespace: string, fluxSyncInterval: string, fluxPrune: boolean, fluxTimeout: string, values: spi.Values, fluxKustomizationPath: string, fluxTargetNamespace?: string): {
        apiVersion: string;
        kind: string;
        metadata: {
            name: string;
            namespace: string;
        };
        spec: {
            interval: string;
            sourceRef: {
                kind: string;
                name: string;
            };
            path: string;
            prune: boolean;
            timeout: string;
        };
    };
}
