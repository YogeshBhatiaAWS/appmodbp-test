import { Construct } from "constructs";
import { HelmAddOn, HelmAddOnUserProps } from "../helm-addon";
import { ClusterInfo } from "../../spi/types";
/**
 * Configuration options for the FluentBit add-on.
 */
export interface CloudWatchLogsAddonProps extends HelmAddOnUserProps {
    /**
     * Create Namespace with the provided one (will not if namespace is kube-system)
     */
    createNamespace?: boolean;
    /**
     * Name of the service account for fluent bit.
     */
    serviceAccountName?: string;
    /**
     * CloudWatch Log Group Name.
     */
    logGroupPrefix: string;
    /**
     * CloudWatch Log retention days
     */
    logRetentionDays?: number;
}
/**
 * CloudWatchLogsAddon deploys FluentBit into an EKS cluster using the `aws-for-fluent-bit` Helm chart.
 * https://github.com/aws/eks-charts/tree/master/stable/aws-for-fluent-bit
 *
 */
export declare class CloudWatchLogsAddon extends HelmAddOn {
    readonly options: CloudWatchLogsAddonProps;
    constructor(props: CloudWatchLogsAddonProps);
    deploy(clusterInfo: ClusterInfo): Promise<Construct>;
}
