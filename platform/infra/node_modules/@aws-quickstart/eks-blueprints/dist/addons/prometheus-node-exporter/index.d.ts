import { Construct } from 'constructs';
import { ClusterInfo } from "../../spi";
import { HelmAddOn, HelmAddOnUserProps } from "../helm-addon";
/**
 * User provided option for the Helm Chart
 */
export interface PrometheusNodeExporterAddOnProps extends HelmAddOnUserProps {
    /**
     * To Create Namespace using CDK
     */
    createNamespace?: boolean;
}
/**
 * Main class to instantiate the Helm chart
 */
export declare class PrometheusNodeExporterAddOn extends HelmAddOn {
    readonly options: PrometheusNodeExporterAddOnProps;
    constructor(props?: PrometheusNodeExporterAddOnProps);
    deploy(clusterInfo: ClusterInfo): Promise<Construct>;
}
