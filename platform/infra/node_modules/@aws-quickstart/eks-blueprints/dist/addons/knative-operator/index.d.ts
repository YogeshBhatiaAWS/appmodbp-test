import { Construct } from 'constructs';
import { ClusterAddOn, ClusterInfo } from "../../spi";
import { HelmAddOnUserProps } from '../helm-addon';
/**
 * Knative Operator Properties extended
 */
export interface KnativeOperatorProps extends HelmAddOnUserProps {
    /**
     * The namespace to install Knative in
     * @default default
     */
    namespace?: string;
    /**
     * The name to be assigned to given to the Knative operator
     * @default knative-operator
     */
    name?: string;
    /**
     * The version of the KNative Operator to use
     * @default v1.8.1
     */
    version?: string;
}
/**
 * Implementation of KNative add-on for EKS Blueprints. Installs KNative to the Cluster.
 */
export declare class KNativeOperator implements ClusterAddOn {
    readonly knativeAddOnProps: KnativeOperatorProps;
    constructor(props?: KnativeOperatorProps);
    deploy(clusterInfo: ClusterInfo): Promise<Construct>;
}
