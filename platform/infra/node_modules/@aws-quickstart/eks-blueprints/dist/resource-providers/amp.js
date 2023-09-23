"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAmpProvider = void 0;
const aps = require("aws-cdk-lib/aws-aps");
/**
 * Creates new AMP Workspace with provided AMP Workspace name
 */
class CreateAmpProvider {
    /**
     * Creates the AMP workspace
     * @param name Name of this resource that other resource providers, add-ons and teams can use for look-up.
     * @param workspaceName Name of your AMP Workspace
     * @param workspaceTags Tags to be used to create AMP Workspace
     */
    constructor(name, workspaceName, workspaceTags) {
        this.name = name;
        this.workspaceName = workspaceName;
        this.workspaceTags = workspaceTags;
    }
    provide(context) {
        return new aps.CfnWorkspace(context.scope, this.name, {
            alias: this.workspaceName,
            tags: this.workspaceTags,
        });
    }
}
exports.CreateAmpProvider = CreateAmpProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3Jlc291cmNlLXByb3ZpZGVycy9hbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsMkNBQTJDO0FBSTNDOztHQUVHO0FBQ0gsTUFBYSxpQkFBaUI7SUFFMUI7Ozs7O09BS0c7SUFDSCxZQUFxQixJQUFZLEVBQVcsYUFBcUIsRUFBVyxhQUF3QjtRQUEvRSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVcsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFBVyxrQkFBYSxHQUFiLGFBQWEsQ0FBVztJQUFHLENBQUM7SUFFeEcsT0FBTyxDQUFDLE9BQTRCO1FBQ2hDLE9BQU8sSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNsRCxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDekIsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQzNCLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQWhCRCw4Q0FnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzcGkgZnJvbSAnLi4vc3BpJztcbmltcG9ydCAqIGFzIGFwcyBmcm9tICdhd3MtY2RrLWxpYi9hd3MtYXBzJztcbmltcG9ydCB7IENmblRhZyB9IGZyb20gXCJhd3MtY2RrLWxpYi9jb3JlXCI7XG5pbXBvcnQgeyBSZXNvdXJjZVByb3ZpZGVyIH0gZnJvbSAnLi4vc3BpJztcblxuLyoqXG4gKiBDcmVhdGVzIG5ldyBBTVAgV29ya3NwYWNlIHdpdGggcHJvdmlkZWQgQU1QIFdvcmtzcGFjZSBuYW1lIFxuICovXG5leHBvcnQgY2xhc3MgQ3JlYXRlQW1wUHJvdmlkZXIgaW1wbGVtZW50cyBSZXNvdXJjZVByb3ZpZGVyPGFwcy5DZm5Xb3Jrc3BhY2U+IHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIEFNUCB3b3Jrc3BhY2VcbiAgICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoaXMgcmVzb3VyY2UgdGhhdCBvdGhlciByZXNvdXJjZSBwcm92aWRlcnMsIGFkZC1vbnMgYW5kIHRlYW1zIGNhbiB1c2UgZm9yIGxvb2stdXAuXG4gICAgICogQHBhcmFtIHdvcmtzcGFjZU5hbWUgTmFtZSBvZiB5b3VyIEFNUCBXb3Jrc3BhY2VcbiAgICAgKiBAcGFyYW0gd29ya3NwYWNlVGFncyBUYWdzIHRvIGJlIHVzZWQgdG8gY3JlYXRlIEFNUCBXb3Jrc3BhY2VcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBuYW1lOiBzdHJpbmcsIHJlYWRvbmx5IHdvcmtzcGFjZU5hbWU6IHN0cmluZywgcmVhZG9ubHkgd29ya3NwYWNlVGFncz86IENmblRhZ1tdKSB7fVxuXG4gICAgcHJvdmlkZShjb250ZXh0OiBzcGkuUmVzb3VyY2VDb250ZXh0KSA6IGFwcy5DZm5Xb3Jrc3BhY2Uge1xuICAgICAgICByZXR1cm4gbmV3IGFwcy5DZm5Xb3Jrc3BhY2UoY29udGV4dC5zY29wZSwgdGhpcy5uYW1lLCB7XG4gICAgICAgICAgICBhbGlhczogdGhpcy53b3Jrc3BhY2VOYW1lLCAgXG4gICAgICAgICAgICB0YWdzOiB0aGlzLndvcmtzcGFjZVRhZ3MsXG4gICAgICAgIH0pOyAgIFxuICAgIH1cbn0iXX0=