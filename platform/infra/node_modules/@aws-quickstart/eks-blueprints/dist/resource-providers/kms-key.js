"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LookupKmsKeyProvider = exports.CreateKmsKeyProvider = void 0;
const kms = require("aws-cdk-lib/aws-kms");
/**
 * Lookup or create a KMS Key to configure EKS secrets encryption.
 *
 * @example
 * ```typescript
 *     const stack = blueprints.EksBlueprint.builder()
 *       .resourceProvider(GlobalResources.KmsKey, new CreateKmsKeyProvider("my-custom-eks-key"))
 *       .account("123456789012")
 *       .region("us-east-1")
 *       .build(app, "east-test-1");
 * ```
 */
class CreateKmsKeyProvider {
    /**
     * Configuration options for the KMS Key.
     *
     * @param aliasName The alias name for the KMS Key
     * @param kmsKeyProps The key props used
     */
    constructor(aliasName, kmsKeyProps) {
        this.aliasName = aliasName;
        this.kmsKeyProps = kmsKeyProps;
    }
    provide(context) {
        const id = context.scope.node.id;
        const keyId = !this.aliasName
            ? `${id}-kms-key`
            : `${id}-${this.aliasName}-KmsKey`;
        let key = undefined;
        key = new kms.Key(context.scope, keyId, {
            alias: this.aliasName,
            description: `Key for EKS Cluster '${context.blueprintProps.id}'`,
            ...this.kmsKeyProps,
        });
        return key;
    }
}
exports.CreateKmsKeyProvider = CreateKmsKeyProvider;
/**
 * Pass an aliasName to lookup an existing KMS Key.
 *
 * @param aliasName The alias name to lookup an existing KMS Key
 */
class LookupKmsKeyProvider {
    constructor(aliasName) {
        this.aliasName = aliasName;
    }
    provide(context) {
        const id = context.scope.node.id;
        const keyId = `${id}-${this.aliasName}-KmsKey`;
        return kms.Key.fromLookup(context.scope, keyId, {
            aliasName: this.aliasName,
        });
    }
}
exports.LookupKmsKeyProvider = LookupKmsKeyProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia21zLWtleS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9yZXNvdXJjZS1wcm92aWRlcnMva21zLWtleS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBMkM7QUFHM0M7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxNQUFhLG9CQUFvQjtJQUkvQjs7Ozs7T0FLRztJQUNILFlBQW1CLFNBQWtCLEVBQUUsV0FBMEI7UUFDL0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUF3QjtRQUM5QixNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDakMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUMzQixDQUFDLENBQUMsR0FBRyxFQUFFLFVBQVU7WUFDakIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLFNBQVMsQ0FBQztRQUNyQyxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUM7UUFFcEIsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtZQUN0QyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDckIsV0FBVyxFQUFFLHdCQUF3QixPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsR0FBRztZQUNqRSxHQUFHLElBQUksQ0FBQyxXQUFXO1NBQ3BCLENBQUMsQ0FBQztRQUVILE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUNGO0FBOUJELG9EQThCQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFhLG9CQUFvQjtJQUcvQixZQUFtQixTQUFpQjtRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQXdCO1FBQzlCLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQyxNQUFNLEtBQUssR0FBRyxHQUFHLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxTQUFTLENBQUM7UUFFL0MsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtZQUM5QyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDMUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBZkQsb0RBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBrbXMgZnJvbSBcImF3cy1jZGstbGliL2F3cy1rbXNcIjtcbmltcG9ydCB7IFJlc291cmNlQ29udGV4dCwgUmVzb3VyY2VQcm92aWRlciB9IGZyb20gXCIuLi9zcGlcIjtcblxuLyoqXG4gKiBMb29rdXAgb3IgY3JlYXRlIGEgS01TIEtleSB0byBjb25maWd1cmUgRUtTIHNlY3JldHMgZW5jcnlwdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogICAgIGNvbnN0IHN0YWNrID0gYmx1ZXByaW50cy5Fa3NCbHVlcHJpbnQuYnVpbGRlcigpXG4gKiAgICAgICAucmVzb3VyY2VQcm92aWRlcihHbG9iYWxSZXNvdXJjZXMuS21zS2V5LCBuZXcgQ3JlYXRlS21zS2V5UHJvdmlkZXIoXCJteS1jdXN0b20tZWtzLWtleVwiKSlcbiAqICAgICAgIC5hY2NvdW50KFwiMTIzNDU2Nzg5MDEyXCIpXG4gKiAgICAgICAucmVnaW9uKFwidXMtZWFzdC0xXCIpXG4gKiAgICAgICAuYnVpbGQoYXBwLCBcImVhc3QtdGVzdC0xXCIpO1xuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBDcmVhdGVLbXNLZXlQcm92aWRlciBpbXBsZW1lbnRzIFJlc291cmNlUHJvdmlkZXI8a21zLklLZXk+IHtcbiAgcHJpdmF0ZSByZWFkb25seSBhbGlhc05hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkga21zS2V5UHJvcHM/OiBrbXMuS2V5UHJvcHM7XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIEtNUyBLZXkuXG4gICAqXG4gICAqIEBwYXJhbSBhbGlhc05hbWUgVGhlIGFsaWFzIG5hbWUgZm9yIHRoZSBLTVMgS2V5XG4gICAqIEBwYXJhbSBrbXNLZXlQcm9wcyBUaGUga2V5IHByb3BzIHVzZWRcbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihhbGlhc05hbWU/OiBzdHJpbmcsIGttc0tleVByb3BzPzoga21zLktleVByb3BzKSB7XG4gICAgdGhpcy5hbGlhc05hbWUgPSBhbGlhc05hbWU7XG4gICAgdGhpcy5rbXNLZXlQcm9wcyA9IGttc0tleVByb3BzO1xuICB9XG5cbiAgcHJvdmlkZShjb250ZXh0OiBSZXNvdXJjZUNvbnRleHQpOiBrbXMuSUtleSB7XG4gICAgY29uc3QgaWQgPSBjb250ZXh0LnNjb3BlLm5vZGUuaWQ7XG4gICAgY29uc3Qga2V5SWQgPSAhdGhpcy5hbGlhc05hbWVcbiAgICAgID8gYCR7aWR9LWttcy1rZXlgXG4gICAgICA6IGAke2lkfS0ke3RoaXMuYWxpYXNOYW1lfS1LbXNLZXlgO1xuICAgIGxldCBrZXkgPSB1bmRlZmluZWQ7XG5cbiAgICBrZXkgPSBuZXcga21zLktleShjb250ZXh0LnNjb3BlLCBrZXlJZCwge1xuICAgICAgYWxpYXM6IHRoaXMuYWxpYXNOYW1lLFxuICAgICAgZGVzY3JpcHRpb246IGBLZXkgZm9yIEVLUyBDbHVzdGVyICcke2NvbnRleHQuYmx1ZXByaW50UHJvcHMuaWR9J2AsXG4gICAgICAuLi50aGlzLmttc0tleVByb3BzLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGtleTtcbiAgfVxufVxuXG4vKipcbiAqIFBhc3MgYW4gYWxpYXNOYW1lIHRvIGxvb2t1cCBhbiBleGlzdGluZyBLTVMgS2V5LlxuICpcbiAqIEBwYXJhbSBhbGlhc05hbWUgVGhlIGFsaWFzIG5hbWUgdG8gbG9va3VwIGFuIGV4aXN0aW5nIEtNUyBLZXlcbiAqL1xuZXhwb3J0IGNsYXNzIExvb2t1cEttc0tleVByb3ZpZGVyIGltcGxlbWVudHMgUmVzb3VyY2VQcm92aWRlcjxrbXMuSUtleT4ge1xuICBwcml2YXRlIHJlYWRvbmx5IGFsaWFzTmFtZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihhbGlhc05hbWU6IHN0cmluZykge1xuICAgIHRoaXMuYWxpYXNOYW1lID0gYWxpYXNOYW1lO1xuICB9XG5cbiAgcHJvdmlkZShjb250ZXh0OiBSZXNvdXJjZUNvbnRleHQpOiBrbXMuSUtleSB7XG4gICAgY29uc3QgaWQgPSBjb250ZXh0LnNjb3BlLm5vZGUuaWQ7XG4gICAgY29uc3Qga2V5SWQgPSBgJHtpZH0tJHt0aGlzLmFsaWFzTmFtZX0tS21zS2V5YDtcblxuICAgIHJldHVybiBrbXMuS2V5LmZyb21Mb29rdXAoY29udGV4dC5zY29wZSwga2V5SWQsIHtcbiAgICAgIGFsaWFzTmFtZTogdGhpcy5hbGlhc05hbWUsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==