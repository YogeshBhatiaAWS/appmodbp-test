import { ClusterInfo } from "../../spi";
import { ApplicationTeam, TeamProps } from "../team";
/**
 * Enum for Allocation Strategy:
 * Best - Best Fit Progressive: AWS Batch selects additional instance types that are large enough to meet the requirements of the jobs.
 * Instance types with a lower cost for each unit vCPU are preferred.
 * Spot - Spot Capacity Optimized: AWS Batch selects one or more instance types that are large enough to meet the requirements of the jobs in the queue.
 * Instance types that are less likely to be interrupted are preferred. This allocation strategy is only available for Spot Instance compute resources.
 */
export declare const enum BatchAllocationStrategy {
    BEST = "BEST_FIT_PROGRESSIVE",
    SPOT = "SPOT_CAPACITY_OPTIMIZED"
}
/**
 * Enum for Batch Compute Environment Type
 */
export declare const enum BatchEnvType {
    EC2 = "EC2",
    SPOT = "SPOT",
    FARGATE = "FARGATE",
    FARGATE_SPOT = "FARGATE_SPOT"
}
/**
 * Interface to define an AWS Batch on EKS team
 */
export interface BatchEksTeamProps extends TeamProps {
    /**
     * Compute Environment name
     */
    envName: string;
    /**
     * Compute Environment compute resources
     */
    computeResources: {
        /**
         * Compute Environment resources Type - see enum BatchEnvType for options
         */
        envType: BatchEnvType;
        /**
         * Allocation strategies for EKS Compute environment - see enum Allocation for options.
         */
        allocationStrategy: BatchAllocationStrategy;
        /**
         * Priority of the job queue - priority is set in descending order
         */
        priority: number;
        /**
         * The minimum number of Amazon EC2 vCPUs that an environment should maintain.
         */
        minvCpus: number;
        /**
         * The maximum number of Amazon EC2 vCPUs that an environment can reach.
         */
        maxvCpus: number;
        /**
         * List of instance types - can be a list that contains Instance Type family (i.e. "m5") or a specific Type (i.e. "m5.4xlarge")
         */
        instanceTypes: string[];
    };
    /**
     * Name of the Job Queue
     */
    jobQueueName: string;
}
export declare class BatchEksTeam extends ApplicationTeam {
    readonly batchTeamProps: BatchEksTeamProps;
    /**
     * @public
     * @param {BatchEksTeamProps} props the Batch team definition {@link BatchEksTeamProps}
     */
    constructor(props: BatchEksTeamProps);
    setup(clusterInfo: ClusterInfo): void;
    /**
     * method to to apply k8s RBAC to the service account used by Batch service role
     * @param ClusterInfo EKS cluster where to apply the RBAC
     * @param namespace Namespace where the RBAC are applied
     * @param createNamespace flag to create namespace if not already created
     * @returns
     */
    private setBatchEksResources;
    private setComputeEnvironment;
}
