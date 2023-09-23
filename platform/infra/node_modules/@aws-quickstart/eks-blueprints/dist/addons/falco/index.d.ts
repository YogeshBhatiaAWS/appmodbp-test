import { HelmAddOnUserProps } from "../helm-addon";
import { ClusterInfo } from '../../spi/types';
import { HelmAddOn } from '../helm-addon/index';
import { Construct } from "constructs";
/**
 * User provided options for the Helm Chart
 */
export interface FalcoAddOnProps extends HelmAddOnUserProps {
    /**
     * Version of the helm chart to deploy
     */
    version?: string;
    /**
     * Enable Kubernetes meta data collection via a connection to the Kubernetes API server
     */
    kubernetesSupportEnabled?: boolean;
    /**
     * Enable falcosidekick deployment
     */
    falcoSidekickEnabled?: string;
    /**
     * Enable falcosidekick webui which provides a simple WebUI for displaying latest events from Falco. It works as output for Falcosidekick.
     */
    falcoSidekickWebuiEnabled?: string;
    /**
     * Enable audit logs for Falco
     */
    auditLogsEnabled?: string;
    /**
     * Create namespace for Falco
     * @default falco
     */
    createNamespace?: boolean;
}
/**
 * This add-on is currently not supported. It will apply the latest falco helm chart but the latest AMI does not have stock driver supported and
 * driver build in the init fails atm.
 */
export declare class FalcoAddOn extends HelmAddOn {
    readonly options: FalcoAddOnProps;
    constructor(props?: FalcoAddOnProps);
    deploy(clusterInfo: ClusterInfo): Promise<Construct>;
}
