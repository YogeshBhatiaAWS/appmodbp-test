import { IManagedPolicy, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { CfnTag } from "aws-cdk-lib";
import { ClusterInfo } from "../spi";
import { ApplicationTeam, TeamProps } from "./team";
/**
 * Interface define the object to create an execution role
 */
export interface ExecutionRoleDefinition {
    /**
     * The name of the IAM role to create, this name is used as base for the excution Role name
     * The name will have the following format after deployment: `NAME-AWS-REGION-EKS-CLUSTER-NAME`.
     */
    executionRoleName: string;
    /**
      * The IAM policy to use with IAM role if it already exists
      * Can be initialized for example by `fromPolicyName` in Policy class
      */
    excutionRoleIamPolicy?: IManagedPolicy;
    /**
      * Takes an array of IAM Policy Statement, you should pass this
      * if you want the Team to create the policy along the IAM role
      */
    executionRoleIamPolicyStatement?: PolicyStatement[];
}
/**
 * Interface to define a EMR on EKS team
 */
export interface EmrEksTeamProps extends TeamProps {
    virtualClusterNamespace: string;
    /**
     * To define if the namespace that team will use need to be created
     */
    createNamespace: boolean;
    virtualClusterName: string;
    /**
     * List of execution role to associated with the VC namespace {@link ExecutionRoleDefinition}
     */
    executionRoles: ExecutionRoleDefinition[];
    /**
     * Tags to apply to EMR on EKS Virtual Cluster
     */
    virtualClusterTags?: CfnTag[];
}
export declare class EmrEksTeam extends ApplicationTeam {
    private emrTeam;
    /**
     * @public
     * @param {EmrEksTeamProps} props the EMR on EKS team definition {@link EmrEksTeamProps}
     */
    constructor(props: EmrEksTeamProps);
    setup(clusterInfo: ClusterInfo): void;
    /**
     * @internal
     * Private method to to apply k8s RBAC to the service account used by EMR on EKS service role
     * For more information on the RBAC read consult the EMR on EKS documentation in this link
     * https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/setting-up-cluster-access.html
     * This method
     * @param ClusterInfo EKS cluster where to apply the RBAC
     * @param namespace Namespace where the RBAC are applied
     * @param createNamespace flag to create namespace if not already created
     * @returns
     */
    private setEmrContainersForNamespace;
    /**
     * @internal
     * private method to create the execution role for EMR on EKS scoped to a namespace and a given IAM role
     * @param cluster EKS cluster
     * @param policy IAM policy to use with the role
     * @param namespace Namespace of the EMR Virtual Cluster
     * @param name Name of the IAM role
     * @returns Role
     */
    private createExecutionRole;
}
