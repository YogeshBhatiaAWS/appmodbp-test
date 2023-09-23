import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { ISubnet } from 'aws-cdk-lib/aws-ec2';
import { ResourceContext, ResourceProvider } from "../spi";
/**
 * Interface for Mapping for fields such as Primary CIDR, Secondary CIDR, Secondary Subnet CIDR.
 */
interface VpcProps {
    primaryCidr: string;
    secondaryCidr?: string;
    secondarySubnetCidrs?: string[];
}
/**
 * VPC resource provider
 */
export declare class VpcProvider implements ResourceProvider<ec2.IVpc> {
    private vpcProps?;
    readonly vpcId?: string;
    readonly primaryCidr?: string;
    readonly secondaryCidr?: string;
    readonly secondarySubnetCidrs?: string[];
    constructor(vpcId?: string, vpcProps?: VpcProps | undefined);
    provide(context: ResourceContext): ec2.IVpc;
    protected createSecondarySubnets(context: ResourceContext, id: string, vpc: ec2.IVpc): void;
}
export declare class DirectVpcProvider implements ResourceProvider<ec2.IVpc> {
    readonly vpc: ec2.IVpc;
    constructor(vpc: ec2.IVpc);
    provide(_context: ResourceContext): ec2.IVpc;
}
/**
 * Direct import secondary subnet provider, based on a known subnet ID.
 * Recommended method if secondary subnet id is known, as it avoids extra look-ups.
 */
export declare class LookupSubnetProvider implements ResourceProvider<ISubnet> {
    private subnetId;
    constructor(subnetId: string);
    provide(context: ResourceContext): ec2.ISubnet;
}
export {};
