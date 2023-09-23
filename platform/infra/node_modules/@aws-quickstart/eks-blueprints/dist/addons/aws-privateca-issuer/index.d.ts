import { Construct } from 'constructs';
import { HelmAddOn, HelmAddOnUserProps } from "../helm-addon";
import { ClusterInfo } from "../../spi";
/**
 * User provided options for the Helm Chart
 */
export interface AWSPrivateCAIssuerAddonProps extends HelmAddOnUserProps {
    /**
     * The name of the service account to use. If createServiceAccount is true, a serviceAccountName is generated.
     */
    serviceAccountName?: string;
    /**
     * An array of Managed IAM Policies which Service Account needs for IRSA Eg: irsaRoles:["AWSCertificateManagerPrivateCAFullAccess"]. If not empty
     * Service Account will be Created by CDK with IAM Roles Mapped (IRSA). In case if its empty, Service Account will be created with default IAM Policy AWSCertificateManagerPrivateCAFullAccess
     */
    iamPolicies?: string[];
}
/**
 * Main class to instantiate the Helm chart
 */
export declare class AWSPrivateCAIssuerAddon extends HelmAddOn {
    readonly options: AWSPrivateCAIssuerAddonProps;
    constructor(props?: AWSPrivateCAIssuerAddonProps);
    deploy(clusterInfo: ClusterInfo): Promise<Construct>;
}
