import { ClusterAddOn, ClusterInfo } from "../../spi";
import { Construct } from "constructs";
export declare class AwsBatchAddOn implements ClusterAddOn {
    deploy(clusterInfo: ClusterInfo): Promise<Construct>;
}
