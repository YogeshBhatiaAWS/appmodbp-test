import * as spi from "../../spi";
/**
 * Flux GitRepository API defines a Source to produce an Artifact for a Git repository revision.
 */
export declare class FluxGitRepository {
    private readonly repository;
    constructor(repository: spi.ApplicationRepository);
    generate(name: string, namespace: string, fluxSyncInterval: string, fluxSecretRefName: string): {
        apiVersion: string;
        kind: string;
        metadata: {
            name: string;
            namespace: string;
        };
        spec: {
            interval: string;
            url: string;
            ref: {
                branch: string | undefined;
            };
        };
    };
}
