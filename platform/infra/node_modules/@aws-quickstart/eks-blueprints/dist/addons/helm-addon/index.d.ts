import { Duration } from "aws-cdk-lib";
import { Construct } from "constructs";
import { HelmChartVersion } from "./helm-version-checker";
import { HelmChartConfiguration } from "./kubectl-provider";
import * as spi from "../..";
import * as utils from "../../utils";
export type HelmAddOnProps = HelmChartConfiguration;
export type HelmAddOnUserProps = Partial<HelmChartConfiguration>;
export declare class HelmAddonPropsConstraints implements utils.ConstraintsType<HelmAddOnProps> {
    /**
    * chart can be no less than 1 character long, and no greater than 63 characters long due to DNS system limitations.
    * https://helm.sh/docs/chart_template_guide/getting_started/#:~:text=TIP%3A%20The%20name%3A%20field%20is,are%20limited%20to%2053%20characters
    */
    chart: spi.utils.StringConstraint;
    /**
    * name can be no less than 1 character long, and no greater than 63 characters long due to DNS system limitations.
    * https://helm.sh/docs/chart_template_guide/getting_started/#:~:text=TIP%3A%20The%20name%3A%20field%20is,are%20limited%20to%2053%20characters
    */
    name: spi.utils.StringConstraint;
    /**
    * namespace can be no less than 1 character long, and no greater than 63 characters long due to DNS system limitations.
    * https://helm.sh/docs/chart_template_guide/getting_started/#:~:text=TIP%3A%20The%20name%3A%20field%20is,are%20limited%20to%2053%20characters
    */
    namespace: spi.utils.StringConstraint;
    /**
    * release can be no less than 1 character long, and no greater than 53 characters long.
    * https://helm.sh/docs/chart_template_guide/getting_started/#:~:text=TIP%3A%20The%20name%3A%20field%20is,are%20limited%20to%2053%20characters
    */
    release: spi.utils.StringConstraint;
    /**
    * repository can be no less than 0 characters long, and no greater than 4096 characters long. It also must follow a URL format.
    * https://docs.aws.amazon.com/connect/latest/APIReference/API_UrlReference.html
    */
    repository: spi.utils.UrlStringConstraint;
    /**
    * version can be no less than 1 character long, and no greater than 63 characters long due to DNS system limitations.
    * https://helm.sh/docs/chart_template_guide/getting_started/#:~:text=TIP%3A%20The%20name%3A%20field%20is,are%20limited%20to%2053%20characters
    */
    version: spi.utils.StringConstraint;
}
export declare abstract class HelmAddOn implements spi.ClusterAddOn {
    props: HelmAddOnProps;
    static validateHelmVersions: boolean;
    static failOnVersionValidation: boolean;
    constructor(props: HelmAddOnProps);
    static validateVersion(helmChart: HelmChartVersion): void;
    /**
     * Expected to be implemented in concrete subclasses.
     * @param clusterInfo
     */
    abstract deploy(clusterInfo: spi.ClusterInfo): void | Promise<Construct>;
    /**
     * Deploys the helm chart in the cluster.
     * @param clusterInfo
     * @param values
     * @param createNamespace
     * @param wait
     * @param timeout
     * @returns
     */
    protected addHelmChart(clusterInfo: spi.ClusterInfo, values?: spi.Values, createNamespace?: boolean, wait?: boolean, timeout?: Duration): Construct;
}
