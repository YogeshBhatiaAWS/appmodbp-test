import { Construct } from 'constructs';
import { ClusterInfo } from '../../spi';
import { HelmAddOn, HelmAddOnUserProps } from '../helm-addon';
/**
 * Configuration options for the add-on.
 */
export interface MetricsServerAddOnProps extends HelmAddOnUserProps {
    /**
     * To Create Namespace using CDK
     */
    createNamespace?: boolean;
}
export declare class MetricsServerAddOn extends HelmAddOn {
    readonly options: MetricsServerAddOnProps;
    constructor(props?: MetricsServerAddOnProps);
    deploy(clusterInfo: ClusterInfo): Promise<Construct>;
}
