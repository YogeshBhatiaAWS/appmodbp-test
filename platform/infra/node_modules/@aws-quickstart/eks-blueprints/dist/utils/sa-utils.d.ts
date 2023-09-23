import { ICluster, ServiceAccount } from "aws-cdk-lib/aws-eks";
import * as eks from "aws-cdk-lib/aws-eks";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from 'constructs';
/**
 * Creates a service account that can access secrets
 * @param clusterInfo
 * @returns sa
 */
export declare function createServiceAccount(cluster: ICluster, name: string, namespace: string, policyDocument: iam.PolicyDocument): ServiceAccount;
export declare function createServiceAccountWithPolicy(cluster: ICluster, name: string, namespace: string, ...policies: iam.IManagedPolicy[]): ServiceAccount;
/**
 * This class is a copy of the CDK ServiceAccount class with the only difference of allowing
 * to replace service account if it already exists (e.g. a case with installing VPC CNI add-on).
 * Once CDK adds support to replace an existing service account, this class should be deleted and replaced
 * with the standard eks.ServiceAccount.
 */
export declare class ReplaceServiceAccount extends Construct implements iam.IPrincipal {
    /**
     * The role which is linked to the service account.
     */
    readonly role: iam.IRole;
    readonly assumeRoleAction: string;
    readonly grantPrincipal: iam.IPrincipal;
    readonly policyFragment: iam.PrincipalPolicyFragment;
    /**
     * The name of the service account.
     */
    readonly serviceAccountName: string;
    /**
     * The namespace where the service account is located in.
     */
    readonly serviceAccountNamespace: string;
    constructor(scope: Construct, id: string, props: eks.ServiceAccountProps);
    addToPrincipalPolicy(statement: iam.PolicyStatement): iam.AddToPrincipalPolicyResult;
    /**
     * If the value is a DNS subdomain name as defined in RFC 1123, from K8s docs.
     *
     * https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names
     */
    private isValidDnsSubdomainName;
    /**
     * If the value follows DNS label standard as defined in RFC 1123, from K8s docs.
     *
     * https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names
     */
    private isValidDnsLabelName;
}
