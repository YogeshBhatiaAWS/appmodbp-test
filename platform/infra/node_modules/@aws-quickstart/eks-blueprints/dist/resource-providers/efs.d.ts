import * as efs from "aws-cdk-lib/aws-efs";
import { ResourceContext, ResourceProvider } from "../spi";
export interface CreateEfsFileSystemProps {
    readonly name?: string;
    readonly efsProps?: Omit<efs.FileSystemProps, "vpc" | "kmsKey">;
    readonly kmsKeyResourceName?: string;
}
export interface LookupEfsFileSystemProps {
    readonly name: string;
    readonly fileSystemId: string;
}
/**
 * EFS resource provider.
 *
 * @param name The name of the EFS file system to create.
 * @param efsProps The props used for the file system.
 */
export declare class CreateEfsFileSystemProvider implements ResourceProvider<efs.IFileSystem> {
    readonly options: CreateEfsFileSystemProps;
    constructor(options: CreateEfsFileSystemProps);
    provide(context: ResourceContext): efs.IFileSystem;
}
/**
 * Pass an EFS file system name and id to lookup an existing EFS file system.
 * @param name The name of the EFS file system to lookup an existing EFS file system.
 * @param fileSystemId The id of the EFS file system to lookup an existing EFS file system.
 */
export declare class LookupEfsFileSystemProvider implements ResourceProvider<efs.IFileSystem> {
    readonly options: LookupEfsFileSystemProps;
    constructor(options: LookupEfsFileSystemProps);
    provide(context: ResourceContext): efs.IFileSystem;
}
