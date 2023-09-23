import { Construct } from 'constructs';
import { ClusterInfo } from "../../spi";
import { HelmAddOn, HelmAddOnUserProps } from "../helm-addon";
/**
 * User provided options for the Helm Chart
 */
export interface CertManagerAddOnProps extends HelmAddOnUserProps {
    /**
     * To automatically install and manage the CRDs as part of your Helm release,
     */
    installCRDs?: boolean;
    /**
     * To Create Namespace using CDK
     */
    createNamespace?: boolean;
}
/**
 * Main class to instantiate the Helm chart
 */
export declare class CertManagerAddOn extends HelmAddOn {
    readonly options: CertManagerAddOnProps;
    constructor(props?: CertManagerAddOnProps);
    deploy(clusterInfo: ClusterInfo): Promise<Construct>;
}
