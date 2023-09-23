import * as eks from "aws-cdk-lib/aws-eks";
import { GenericClusterProvider } from "./generic-cluster-provider";
import { AutoscalingNodeGroup } from "./types";
/**
 * Configuration options for the cluster provider.
 */
export interface AsgClusterProviderProps extends Partial<eks.CommonClusterOptions>, AutoscalingNodeGroup {
    /**
     * The name for the cluster.
     */
    name?: string;
    /**
     * Is it a private only EKS Cluster?
     * Defaults to private_and_public cluster, set to true for private cluster
     * @default false
     */
    privateCluster?: boolean;
    /**
     * Tags for the cluster
     */
    tags?: {
        [key: string]: string;
    };
}
/**
 * AsgClusterProvider provisions an EKS cluster with an autoscaling group for self-managed capacity.
 */
export declare class AsgClusterProvider extends GenericClusterProvider {
    constructor(props?: AsgClusterProviderProps);
}
