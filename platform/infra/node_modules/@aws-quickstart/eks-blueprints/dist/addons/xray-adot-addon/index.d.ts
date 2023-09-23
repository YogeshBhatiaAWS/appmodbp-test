import { ClusterAddOn, ClusterInfo } from "../../spi";
import { Construct } from 'constructs';
/**
 * This XRAY ADOT add-on deploys an AWS Distro for OpenTelemetry (ADOT) Collector for X-Ray which receives traces from the
 * application and sends the same to X-Ray console. You can change the mode to Daemonset, StatefulSet,
 * and Sidecar depending on your deployment strategy.
 */
/**
 * Configuration options for add-on.
 */
export interface XrayAdotAddOnProps {
    /**
     * Modes supported : `deployment`, `daemonset`, `statefulSet`, and `sidecar`
     * @default deployment
     */
    deploymentMode?: xrayDeploymentMode;
    /**
     * Namespace to deploy the ADOT Collector for XRay.
     * @default default
     */
    namespace?: string;
    /**
     * Name for deployment of the ADOT Collector for XRay.
     * @default 'adot-collector-xray'
     */
    name?: string;
}
export declare const enum xrayDeploymentMode {
    DEPLOYMENT = "deployment",
    DAEMONSET = "daemonset",
    STATEFULSET = "statefulset",
    SIDECAR = "sidecar"
}
/**
 * Implementation of XRAY ADOT add-on for EKS Blueprints. Installs ADOT Collector.
 */
export declare class XrayAdotAddOn implements ClusterAddOn {
    readonly xrayAddOnProps: XrayAdotAddOnProps;
    constructor(props?: XrayAdotAddOnProps);
    deploy(clusterInfo: ClusterInfo): Promise<Construct>;
}
