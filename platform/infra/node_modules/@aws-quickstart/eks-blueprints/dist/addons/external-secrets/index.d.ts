import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import { ClusterInfo } from "../../spi";
import { HelmAddOn, HelmAddOnUserProps } from "../helm-addon";
/**
 * Configuration options for the ExternalsSecrets add-on.
 */
export interface ExternalsSecretsAddOnProps extends HelmAddOnUserProps {
    /**
     * Iam policies for the add-on.
     */
    iamPolicies?: iam.PolicyStatement[];
}
/**
 * ExternalsSecretsAddOn deploys ExternalsSecrets into an EKS cluster using the `external-secrets` Helm chart.
 * https://github.com/external-secrets/external-secrets/
 *
 * For information on how to configure the `external-secrets` Helm chart, please view the values.yaml spec provided by the chart.
 * https://github.com/external-secrets/external-secrets/blob/main/deploy/charts/external-secrets/values.yaml
 */
export declare class ExternalsSecretsAddOn extends HelmAddOn {
    readonly options: ExternalsSecretsAddOnProps;
    constructor(props?: ExternalsSecretsAddOnProps);
    deploy(clusterInfo: ClusterInfo): Promise<Construct>;
}
