import { aws_autoscaling as asg, aws_eks as eks } from "aws-cdk-lib";
import { ClusterInfo } from "..";
import { GenericClusterProvider } from "./generic-cluster-provider";
import { ManagedNodeGroup } from "./types";
/**
 * Configuration options for the cluster provider.
 */
export interface MngClusterProviderProps extends Partial<eks.CommonClusterOptions>, Omit<ManagedNodeGroup, "id"> {
    /**
    * The name for the cluster.
    * @deprecated use #clusterName
    */
    name?: string;
    /**
     * In this case id is optional and defaults tp the cluster name
     */
    id?: string;
    /**
     * Is it a private only EKS Cluster?
     * Defaults to private_and_public cluster, set to true for private cluster
     * @default false
     */
    privateCluster?: boolean;
    /**
     * Tags for the Cluster.
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * Tags for the node group.
     */
    nodeGroupTags?: {
        [key: string]: string;
    };
}
/**
 * MngClusterProvider provisions an EKS cluster with a managed node group for managed capacity.
 */
export declare class MngClusterProvider extends GenericClusterProvider {
    constructor(props?: MngClusterProviderProps);
}
/**
 * Validates that cluster is backed by EC2 either through a managed node group or through a self-managed autoscaling group.
 * @param clusterInfo
 * @param source Used for error message to identify the source of the check
 * @returns
 */
export declare function assertEC2NodeGroup(clusterInfo: ClusterInfo, source: string): eks.Nodegroup[] | asg.AutoScalingGroup[];
