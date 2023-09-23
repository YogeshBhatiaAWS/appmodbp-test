import * as spi from '../spi';
import * as aps from 'aws-cdk-lib/aws-aps';
import { CfnTag } from "aws-cdk-lib/core";
import { ResourceProvider } from '../spi';
/**
 * Creates new AMP Workspace with provided AMP Workspace name
 */
export declare class CreateAmpProvider implements ResourceProvider<aps.CfnWorkspace> {
    readonly name: string;
    readonly workspaceName: string;
    readonly workspaceTags?: CfnTag[] | undefined;
    /**
     * Creates the AMP workspace
     * @param name Name of this resource that other resource providers, add-ons and teams can use for look-up.
     * @param workspaceName Name of your AMP Workspace
     * @param workspaceTags Tags to be used to create AMP Workspace
     */
    constructor(name: string, workspaceName: string, workspaceTags?: CfnTag[] | undefined);
    provide(context: spi.ResourceContext): aps.CfnWorkspace;
}
