import { Construct } from 'constructs';
import { ClusterInfo } from "../../spi";
import { HelmAddOn, HelmAddOnUserProps } from "../helm-addon";
import { ValuesSchema } from './values';
/**
 * User provided options for the Helm Chart
 */
export interface GpuOperatorAddonProps extends HelmAddOnUserProps {
    /**
     * To Create Namespace using CDK
     */
    createNamespace?: boolean;
    values?: ValuesSchema;
}
/**
 * Main class to instantiate the Helm chart for NVIDIA GPU operator
 * GPU operator manages the software and drivers needed for GPU accelerated workloads
 * It validates all requisite software is installed before scheduling GPU workload
 * Using MIG (Multi Instance GPUs) allows you to virtually split your GPU into multiple units
 */
export declare class GpuOperatorAddon extends HelmAddOn {
    readonly options: GpuOperatorAddonProps;
    constructor(props?: GpuOperatorAddonProps);
    deploy(clusterInfo: ClusterInfo): Promise<Construct>;
}
