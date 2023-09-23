import { Construct } from "constructs";
import { ClusterInfo } from '../../spi';
import { HelmAddOn, HelmAddOnUserProps } from '../helm-addon';
import * as cdk from 'aws-cdk-lib';
/**
 * Configuration options for exposing the JupyterHub proxy
 */
export declare enum JupyterHubServiceType {
    /**
     * Expose the service using AWS Application Load Balancer + Ingress controller
     */
    ALB = 0,
    /**
     * Expose the service using AWS Network Load Balancer + LoadBalancer service
     */
    NLB = 1,
    /**
     * Use ClusterIP service type and allow customers to port-forward for localhost access
     */
    CLUSTERIP = 2
}
/**
 * Configuration options for the add-on.
 */
export interface JupyterHubAddOnProps extends HelmAddOnUserProps {
    /**
     * Configurations necessary to use EBS as Persistent Volume
     * @property {string} storageClass - storage class for the volume
     * @property {string} capacity - storage capacity (in Mi or Gi)
     */
    ebsConfig?: {
        storageClass: string;
        capacity: string;
    };
    /**
     * Configuration necessary to use EFS as Persistent Volume
     * @property {cdk.RemovalPolicy} removalPolicy - Removal Policy for EFS (DESTROY, RETAIN or SNAPSHOT)
     * @property {string} pvcName - Name of the Volume to be used for PV and PVC
     * @property {string} capacity - Storage Capacity (in Mi or Gi)
     */
    efsConfig?: {
        removalPolicy: cdk.RemovalPolicy;
        pvcName: string;
        capacity: string;
    };
    /**
     * Configuration settings for OpenID Connect authentication protocol
     */
    oidcConfig?: {
        callbackUrl: string;
        authUrl: string;
        tokenUrl: string;
        userDataUrl: string;
        clientId: string;
        clientSecret: string;
        scope?: string[];
        usernameKey?: string;
    };
    /**
     * Configuration to set how the hub service will be exposed
     * See enum jupyterHubService for choices
     */
    serviceType: JupyterHubServiceType;
    /**
     * Ingress host - only if Ingress is enabled
     * It is a list of available hosts to be routed upon request
     */
    ingressHosts?: string[];
    /**
     * Ingress annotations - only apply if Ingress is enabled, otherwise throws an error
     */
    ingressAnnotations?: {
        [key: string]: string;
    };
    /**
     * Notebook stack as defined using Docker Stacks for Jupyter here:
     * https://jupyter-docker-stacks.readthedocs.io/en/latest/using/selecting.html#core-stacks
     */
    notebookStack?: string;
    /**
     * Name of the certificate {@link NamedResourceProvider} to be used for certificate look up.
     * @see {@link ImportCertificateProvider} and {@link CreateCertificateProvider} for examples of certificate providers.
     */
    certificateResourceName?: string;
}
/**
 * Implementation of the JupyterHub add-on
 */
export declare class JupyterHubAddOn extends HelmAddOn {
    readonly options: JupyterHubAddOnProps;
    constructor(props?: JupyterHubAddOnProps);
    deploy(clusterInfo: ClusterInfo): Promise<Construct>;
    /**
     * This is a helper function to create EBS persistent storage
     * @param {ClusterInfo} clusterInfo - Cluster Info
     * @param {string} values - Helm Chart Values
     * @param {string} ebsConfig - EBS Configurations supplied by user
     * @returns
     */
    protected addEbsStorage(clusterInfo: ClusterInfo, values: any, ebsConfig: any): void;
    /**
     * This is a helper function to create EFS persistent storage
     * @param {ClusterInfo} clusterInfo - Cluster Info
     * @param {string} values - Helm Chart Values
     * @param {string} efsConfig - EFS Configurations supplied by user
     * @returns
     */
    protected addEfsStorage(clusterInfo: ClusterInfo, values: any, efsConfig: any): void;
    /**
     * This is a helper function to use EFS as persistent storage
     * including necessary security group with ingress rule,
     * EFS File System, Kubernetes PV and PVC
     * @param {ClusterInfo} clusterInfo - Cluster Info
     * @param {string} namespace - Namespace
     * @param {string} pvcName - Name of the PV and PVC
     * @param {RemovalPolicy}removalPolicy - Removal Policy for EFS File System (RETAIN, DESTROY or SNAPSHOT)
     * @returns
     * */
    protected setupEFS(clusterInfo: ClusterInfo, namespace: string, pvcName: string, capacity: string, removalPolicy: cdk.RemovalPolicy): void;
}
