import { Construct } from 'constructs';
import { ClusterInfo } from "../../spi";
import { HelmAddOn, HelmAddOnUserProps } from "../helm-addon";
/**
 * User provided option for the Helm Chart
 */
export interface KubeStateMetricsAddOnProps extends HelmAddOnUserProps {
    /**
     * To Create Namespace using CDK
     */
    createNamespace?: boolean;
}
/**
 * Main class to instantiate the Helm chart
 */
export declare class KubeStateMetricsAddOn extends HelmAddOn {
    readonly options: KubeStateMetricsAddOnProps;
    constructor(props?: KubeStateMetricsAddOnProps);
    deploy(clusterInfo: ClusterInfo): Promise<Construct>;
}
