import { Construct } from "constructs";
import "reflect-metadata";
import { ClusterInfo } from "../../spi";
import { HelmAddOn, HelmAddOnUserProps } from "../helm-addon";
/**
 * Configuration options for the add-on.
 */
export interface AwsLoadBalancerControllerProps extends HelmAddOnUserProps {
    /**
     * Enable Shield (must be false for CN partition)
     */
    enableShield?: boolean;
    /**
     * Enable WAF (must be false for CN partition)
     */
    enableWaf?: boolean;
    /**
     * Enable WAFV2 (must be false for CN partition)
     */
    enableWafv2?: boolean;
    /**
     * Create the ingressClass to be used by the ALB controller
     */
    createIngressClassResource?: boolean;
    /**
     * Name of ingressClass to the ALB controller will satisfy. If not provided
     * the value will be defaulted to "alb"
     */
    ingressClass?: string;
    /**
     * If false, disable the Service Mutator webhook which makes all new services of type LoadBalancer reconciled by the lb controller.
     * @default false
     */
    enableServiceMutatorWebhook?: boolean;
}
export declare class AwsLoadBalancerControllerAddOn extends HelmAddOn {
    readonly options: AwsLoadBalancerControllerProps;
    constructor(props?: AwsLoadBalancerControllerProps);
    deploy(clusterInfo: ClusterInfo): Promise<Construct>;
}
