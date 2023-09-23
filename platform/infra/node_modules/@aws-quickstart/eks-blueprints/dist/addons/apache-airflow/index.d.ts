import { Construct } from "constructs";
import { HelmAddOnUserProps } from "../helm-addon";
import { HelmAddOn } from '../helm-addon/index';
import { ClusterInfo } from '../../spi/types';
/**
 * User provided options for the Helm Chart
 */
export interface AirflowAddOnProps extends HelmAddOnUserProps {
    /**
     * Namespace
     */
    namespace?: string;
    /**
     * Enable Load Balancer for Ingress - default is false
     */
    enableAlb?: boolean;
    /**
     * Name of the {@link certificateResourceName} to be used for certificate look up.
     * @see {@link ImportCertificateProvider} and {@link CreateCertificateProvider} for examples of certificate providers.
     */
    certificateResourceName?: string;
    /**
     * Enable Logging with S3  - default is false
     */
    enableLogging?: boolean;
    /**
     * Names of the S3 Bucket provider named resources (@see CreateS3BucketProvider, @see ImportS3BucketProvider).
     * S3 Bucket provider is registered as named resource providers with the EksBlueprintProps.
     */
    s3Bucket?: string;
    /**
     * Enable EFS for persistent storage of DAGs - default is false
     */
    enableEfs?: boolean;
    /**
     * Names of the EFS File System provider named resources (@see CreateEfsFileSystemProvider, @see LookupEfsFileSystemProvider).
     * EFS File System provider is registered as named resource providers with the EksBlueprintProps.
     * This is required if EFS is enabled
     */
    efsFileSystem?: string;
}
/**
 * This add-on is currently not supported. It will apply the latest falco helm chart but the latest AMI does not have stock driver supported and
 * driver build in the init fails atm.
 */
export declare class ApacheAirflowAddOn extends HelmAddOn {
    readonly options: AirflowAddOnProps;
    constructor(props?: AirflowAddOnProps);
    deploy(clusterInfo: ClusterInfo): Promise<Construct>;
}
