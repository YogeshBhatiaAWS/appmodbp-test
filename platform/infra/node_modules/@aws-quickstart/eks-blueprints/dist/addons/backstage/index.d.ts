import { Construct } from "constructs";
import { HelmAddOn, HelmAddOnUserProps } from "../helm-addon";
import { ClusterInfo, Values } from "../../spi";
/**
 * User provided options for the Helm Chart
 */
export interface BackstageAddOnProps extends HelmAddOnUserProps {
    /**
     * The subdomain that will be assigned to the Backstage application.
     */
    subdomain: string;
    /**
     * The resource name of the certificate to be assigned to the Load Balancer.
     */
    certificateResourceName: string;
    /**
     * The registry URL of the Backstage application's Docker image.
     */
    imageRegistry: string;
    /**
     * The repository name in the "imageRegistry".
     */
    imageRepository: string;
    /**
     * The tag of the Backstage application's Docker image.
     * @default 'latest'
     */
    imageTag?: string;
    /**
     * The resource name of the database.
     */
    databaseResourceName: string;
    /**
     * The name of the Kubernetes Secret which will be created by the add-on and
     * injected with the database credentials.
     */
    databaseSecretTargetName: string;
}
/**
 * Main class to instantiate the Helm chart
 */
export declare class BackstageAddOn extends HelmAddOn {
    readonly options: BackstageAddOnProps;
    constructor(props?: BackstageAddOnProps);
    deploy(clusterInfo: ClusterInfo): Promise<Construct>;
    /**
    * populateValues populates the appropriate values used to customize the Helm chart
    * @param helmOptions User provided values to customize the chart
    */
    populateValues(clusterInfo: ClusterInfo, helmOptions: BackstageAddOnProps): Values;
}
