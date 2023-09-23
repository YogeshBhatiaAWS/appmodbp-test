import { Construct } from 'constructs';
import { ClusterInfo } from "../../spi";
import { HelmAddOn, HelmAddOnUserProps } from "../helm-addon";
/**
 * User provided options for the Helm Chart
 */
export interface GrafanaOperatorAddonProps extends HelmAddOnUserProps {
    /**
     * To Create Namespace using CDK
     */
    createNamespace?: boolean;
}
/**
 * Main class to instantiate the Helm chart
 */
export declare class GrafanaOperatorAddon extends HelmAddOn {
    readonly options: GrafanaOperatorAddonProps;
    constructor(props?: GrafanaOperatorAddonProps);
    deploy(clusterInfo: ClusterInfo): Promise<Construct>;
}
