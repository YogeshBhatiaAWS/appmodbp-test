import { ClusterAddOn, ClusterInfo } from "../../spi";
import { Construct } from 'constructs';
/**
 * This CloudWatch ADOT Addon deploys an AWS Distro for OpenTelemetry (ADOT) Collector for
 * CloudWatch which receives metrics and logs from the application and sends the same to
 * CloudWatch console. You can change the mode to Daemonset, StatefulSet, and Sidecar
 * depending on your deployment strategy.
 */
/**
 * Configuration options for CloudWatch Adot add-on.
 */
export interface CloudWatchAdotAddOnProps {
    /**
     * Modes supported : `deployment`, `daemonset`, `statefulSet`, and `sidecar`
     * @default deployment
     */
    deploymentMode?: cloudWatchDeploymentMode;
    /**
     * Namespace to deploy the ADOT Collector for CloudWatch.
     * @default default
     */
    namespace?: string;
    /**
     * Name to deploy the ADOT Collector for CloudWatch.
     * @default 'adot-collector-cloudwatch'
     */
    name?: string;
    /**
     * Metrics name selectors to write to CloudWatch.
     * @default "['apiserver_request_.*', 'container_memory_.*', 'container_threads', 'otelcol_process_.*']"
     */
    metricsNameSelectors?: string[];
    /**
     * Labels of Pods to select your application pods emitting custom metrics.
     * Example 'frontend|downstream(.*)'
     * @default '.*'
     */
    podLabelRegex?: string;
}
export declare const enum cloudWatchDeploymentMode {
    DEPLOYMENT = "deployment",
    DAEMONSET = "daemonset",
    STATEFULSET = "statefulset",
    SIDECAR = "sidecar"
}
/**
 * Implementation of CloudWatch ADOT add-on for EKS Blueprints. Installs ADOT Collector.
 */
export declare class CloudWatchAdotAddOn implements ClusterAddOn {
    readonly cloudWatchAddOnProps: CloudWatchAdotAddOnProps;
    constructor(props?: CloudWatchAdotAddOnProps);
    deploy(clusterInfo: ClusterInfo): Promise<Construct>;
}
