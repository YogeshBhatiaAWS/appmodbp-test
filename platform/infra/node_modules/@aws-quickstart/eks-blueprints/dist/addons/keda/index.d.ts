import { Construct } from 'constructs';
import { ClusterInfo } from "../../spi";
import { HelmAddOn, HelmAddOnUserProps } from "../helm-addon";
/**
 * User provided options for the Helm Chart
 */
export interface KedaAddOnProps extends HelmAddOnUserProps {
    /**
     * Version of the helm chart to deploy
     */
    version?: string;
    /**
     * Name of the KEDA operator
     */
    kedaOperatorName?: string;
    /**
     * The name of the service account to use. If not set and create is true, a name is generated.
     */
    kedaServiceAccountName?: string;
    /**
     * securityContext: fsGroup
     * Check the workaround for SQS Scalar with IRSA https://github.com/kedacore/keda/issues/837#issuecomment-789037326
     */
    podSecurityContextFsGroup?: number;
    /**
     * securityContext:runAsGroup
     * Check the workaround for SQS Scalar with IRSA https://github.com/kedacore/keda/issues/837#issuecomment-789037326
     */
    securityContextRunAsGroup?: number;
    /**
     * securityContext:runAsUser
     * Check the workaround for SQS Scalar with IRSA https://github.com/kedacore/keda/issues/837#issuecomment-789037326
     */
    securityContextRunAsUser?: number;
    /**
     * An array of Managed IAM Policies which Service Account needs for IRSA Eg: irsaRoles:["CloudWatchFullAccess","AmazonSQSFullAccess"]. If not empty
     * Service Account will be Created by CDK with IAM Roles Mapped (IRSA). In case if its empty, Keda will create the Service Account with out IAM Roles
     */
    irsaRoles?: string[];
}
/**
 * Main class to instantiate the Helm chart
 */
export declare class KedaAddOn extends HelmAddOn {
    readonly options: KedaAddOnProps;
    constructor(props?: KedaAddOnProps);
    deploy(clusterInfo: ClusterInfo): Promise<Construct>;
}
