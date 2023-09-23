import { ClusterAddOn, ClusterInfo } from "../../spi";
import { Construct } from "constructs";
export declare class EmrEksAddOn implements ClusterAddOn {
    deploy(clusterInfo: ClusterInfo): Promise<Construct>;
}
