import { Construct } from "constructs";
import { HelmChartDeployment } from "../helm-addon/kubectl-provider";
import { ClusterInfo } from "../../spi";
export declare class ArgoGitOpsFactory {
    static enableGitOps(): void;
    static enableGitOpsAppOfApps(): void;
}
export declare const createArgoHelmApplication: (clusterInfo: ClusterInfo, helmDeployment: HelmChartDeployment) => Construct;
export declare const generateArgoHelmApplicationValues: (clusterInfo: ClusterInfo, helmDeployment: HelmChartDeployment) => Construct;
