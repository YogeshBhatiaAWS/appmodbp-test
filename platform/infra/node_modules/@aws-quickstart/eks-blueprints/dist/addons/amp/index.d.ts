import { ClusterAddOn, ClusterInfo, Values } from "../../spi";
import { Construct } from 'constructs';
/**
 * This AMP add-on installs an ADOT Collector for Amazon Managed Service for Prometheus
 * (AMP) and creates an AMP worpsace to receive OTLP metrics from the application and
 * Prometheus metrics scraped from pods on the cluster and remote writes the metrics
 * to AMP remote write endpoint of the created or passed AMP workspace.
 */
export interface AmpRules {
    /**
     * AMP workspace ARN.
     */
    ampWorkspaceArn: string;
    /**
     * Paths of the files listing the AMP rules.
     */
    ruleFilePaths: string[];
}
export interface OpenTelemetryCollector {
    /**
    * An alternative OpenTelemetryCollector if you need further cusomisation.
    * If not provided, the default will be used.
    */
    manifestPath: string;
    /**
    * This parameter is optional and holds an object of type Values, with keys and values.
    * The same key literals will need to be used within the manifest between double curly braces {{}} and the add-on will replace them with the related values.
    * The following keys are already in use by the add-on and will be replaced in your manifest with configured values, if you want to use them:
    * remoteWriteEndpoint, awsRegion, deploymentMode, namespace, clusterName. To use any of those you can just include e.g. {{remoteWriteEndpoint}} inside the manifest.
    */
    manifestParameterMap?: Values;
}
/**
 * Configuration options for add-on.
 */
export interface AmpAddOnProps {
    /**
     * Remote Write URL of the AMP Workspace to be used for setting up remote write.
     *  Format : https://aps-workspaces.<region>.amazonaws.com/workspaces/<ws-workspaceid>/",
     */
    ampPrometheusEndpoint: string;
    /**
     * Modes supported : `deployment`, `daemonset`, `statefulSet`, and `sidecar`
     * @default deployment
     */
    deploymentMode?: DeploymentMode;
    /**
     * Namespace to deploy the ADOT Collector for AMP.
     * @default default
     */
    namespace?: string;
    /**
     * Name for deployment of the ADOT Collector for AMP.
     * @default 'adot-collector-amp'
     */
    name?: string;
    /**
     * Enable "apiserver" job in the Prometheus configuration of the default OpenTelemetryCollector.
     * @default false
     */
    enableAPIServerJob?: boolean;
    /**
     * AMP rules providing AMP workspace ARN and paths to files encoding recording and/or alerting rules following the same format as a rules file in standalone Prometheus.
     * This parameter is optional and if not provided, no rules will be applied.
     */
    ampRules?: AmpRules;
    /**
    * An alternative OpenTelemetryCollector if you need further customisation.
    * If you need to configure rules, please do not use the rule_files field like in standalone Prometheus, but rather use the ampRules parameter.
    * If not provided, the default will be used.
    */
    openTelemetryCollector?: OpenTelemetryCollector;
}
export declare const enum DeploymentMode {
    DEPLOYMENT = "deployment",
    DAEMONSET = "daemonset",
    STATEFULSET = "statefulset",
    SIDECAR = "sidecar"
}
/**
 * Implementation of AMP add-on for EKS Blueprints. Installs ADOT Collector.
 */
export declare class AmpAddOn implements ClusterAddOn {
    readonly ampAddOnProps: AmpAddOnProps;
    constructor(props: AmpAddOnProps);
    deploy(clusterInfo: ClusterInfo): Promise<Construct>;
    private configureRules;
}
