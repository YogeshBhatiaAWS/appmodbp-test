import * as iam from 'aws-cdk-lib/aws-iam';
import * as spi from '../spi';
/**
 * Role provider that imports an existing role, performing its lookup by the provided name.
 */
export declare class LookupRoleProvider implements spi.ResourceProvider<iam.IRole> {
    private readonly roleName;
    private readonly mutable?;
    constructor(roleName: string, mutable?: boolean | undefined);
    provide(context: spi.ResourceContext): iam.IRole;
}
/**
 * Resource provider that creates a new role.
 */
export declare class CreateRoleProvider implements spi.ResourceProvider<iam.Role> {
    private roleId;
    private assumedBy;
    private policies?;
    /**
     * Constructor to create role provider.
     * @param roleId role id
     * @param assumedBy @example  new iam.ServicePrincipal('ec2.amazonaws.com')
     * @param policies
     */
    constructor(roleId: string, assumedBy: iam.IPrincipal, policies?: iam.IManagedPolicy[] | undefined);
    provide(context: spi.ResourceContext): iam.Role;
}
/**
 * OpenIdConnect provider can lookup an existing OpenIdConnectProvider based on the OIDC provider URL.
 */
export declare class LookupOpenIdConnectProvider implements spi.ResourceProvider<iam.IOpenIdConnectProvider> {
    readonly url: string;
    protected readonly id: string;
    constructor(url: string, id?: string);
    provide(context: spi.ResourceContext): iam.IOpenIdConnectProvider;
}
