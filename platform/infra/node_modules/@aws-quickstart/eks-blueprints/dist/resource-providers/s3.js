"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateS3BucketProvider = exports.ImportS3BucketProvider = void 0;
const s3 = require("aws-cdk-lib/aws-s3");
/**
 * S3 Bucket provider that imports an S3 Bucket into the current stack by name.
 */
class ImportS3BucketProvider {
    /**
     * @param s3BucketName name of the S3 Bucket to look up
     * @param id optional id for the structure (for tracking). set to s3bucketname by default
     */
    constructor(s3BucketName, id) {
        this.s3BucketName = s3BucketName;
        this.id = id;
    }
    provide(context) {
        var _a;
        return s3.Bucket.fromBucketName(context.scope, (_a = this.id) !== null && _a !== void 0 ? _a : `${this.s3BucketName}-Lookup`, this.s3BucketName);
    }
}
exports.ImportS3BucketProvider = ImportS3BucketProvider;
/**
 * S3 Bucket provider that creates a new S3 Bucket.
 */
class CreateS3BucketProvider {
    /**
     * Creates the S3 provider.
     * @param name Name of the S3 Bucket. This must be globally unique.
     */
    constructor(options) {
        this.options = options;
    }
    provide(context) {
        return new s3.Bucket(context.scope, this.options.id, {
            bucketName: this.options.name,
            ...this.options.s3BucketProps,
        });
    }
}
exports.CreateS3BucketProvider = CreateS3BucketProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiczMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvcmVzb3VyY2UtcHJvdmlkZXJzL3MzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHlDQUF5QztBQVF6Qzs7R0FFRztBQUNILE1BQWEsc0JBQXNCO0lBRS9COzs7T0FHRztJQUNILFlBQTZCLFlBQW9CLEVBQW1CLEVBQVU7UUFBakQsaUJBQVksR0FBWixZQUFZLENBQVE7UUFBbUIsT0FBRSxHQUFGLEVBQUUsQ0FBUTtJQUFHLENBQUM7SUFFbEYsT0FBTyxDQUFDLE9BQTRCOztRQUNoQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBQSxJQUFJLENBQUMsRUFBRSxtQ0FBSSxHQUFHLElBQUksQ0FBQyxZQUFZLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEgsQ0FBQztDQUNKO0FBWEQsd0RBV0M7QUFFRDs7R0FFRztBQUNILE1BQWEsc0JBQXNCO0lBRy9COzs7T0FHRztJQUNILFlBQVksT0FBNEI7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUE0QjtRQUNoQyxPQUFPLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFO1lBQ2pELFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7WUFDN0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWE7U0FDaEMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBakJELHdEQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHNwaSBmcm9tICcuLi9zcGknO1xuaW1wb3J0ICogYXMgczMgZnJvbSAnYXdzLWNkay1saWIvYXdzLXMzJztcblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVTM0J1Y2tldFByb3BzIHtcbiAgICByZWFkb25seSBuYW1lPzogc3RyaW5nLFxuICAgIHJlYWRvbmx5IGlkOiBzdHJpbmcsXG4gICAgcmVhZG9ubHkgczNCdWNrZXRQcm9wcz86IE9taXQ8czMuQnVja2V0UHJvcHMsIFwiYnVja2V0TmFtZVwiPlxufVxuXG4vKipcbiAqIFMzIEJ1Y2tldCBwcm92aWRlciB0aGF0IGltcG9ydHMgYW4gUzMgQnVja2V0IGludG8gdGhlIGN1cnJlbnQgc3RhY2sgYnkgbmFtZS4gXG4gKi9cbmV4cG9ydCBjbGFzcyBJbXBvcnRTM0J1Y2tldFByb3ZpZGVyIGltcGxlbWVudHMgc3BpLlJlc291cmNlUHJvdmlkZXI8czMuSUJ1Y2tldD4ge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHMzQnVja2V0TmFtZSBuYW1lIG9mIHRoZSBTMyBCdWNrZXQgdG8gbG9vayB1cFxuICAgICAqIEBwYXJhbSBpZCBvcHRpb25hbCBpZCBmb3IgdGhlIHN0cnVjdHVyZSAoZm9yIHRyYWNraW5nKS4gc2V0IHRvIHMzYnVja2V0bmFtZSBieSBkZWZhdWx0XG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzM0J1Y2tldE5hbWU6IHN0cmluZywgcHJpdmF0ZSByZWFkb25seSBpZDogc3RyaW5nKSB7fVxuXG4gICAgcHJvdmlkZShjb250ZXh0OiBzcGkuUmVzb3VyY2VDb250ZXh0KSA6IHMzLklCdWNrZXQge1xuICAgICAgICByZXR1cm4gczMuQnVja2V0LmZyb21CdWNrZXROYW1lKGNvbnRleHQuc2NvcGUsIHRoaXMuaWQgPz8gYCR7dGhpcy5zM0J1Y2tldE5hbWV9LUxvb2t1cGAsIHRoaXMuczNCdWNrZXROYW1lKTtcbiAgICB9XG59XG5cbi8qKlxuICogUzMgQnVja2V0IHByb3ZpZGVyIHRoYXQgY3JlYXRlcyBhIG5ldyBTMyBCdWNrZXQuIFxuICovXG5leHBvcnQgY2xhc3MgQ3JlYXRlUzNCdWNrZXRQcm92aWRlciBpbXBsZW1lbnRzIHNwaS5SZXNvdXJjZVByb3ZpZGVyPHMzLklCdWNrZXQ+IHtcblxuICAgIHJlYWRvbmx5IG9wdGlvbnM6IENyZWF0ZVMzQnVja2V0UHJvcHM7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgUzMgcHJvdmlkZXIuXG4gICAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgUzMgQnVja2V0LiBUaGlzIG11c3QgYmUgZ2xvYmFsbHkgdW5pcXVlLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IENyZWF0ZVMzQnVja2V0UHJvcHMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG5cbiAgICBwcm92aWRlKGNvbnRleHQ6IHNwaS5SZXNvdXJjZUNvbnRleHQpIDogczMuSUJ1Y2tldCB7XG4gICAgICAgIHJldHVybiBuZXcgczMuQnVja2V0KGNvbnRleHQuc2NvcGUsIHRoaXMub3B0aW9ucy5pZCwge1xuICAgICAgICAgICAgYnVja2V0TmFtZTogdGhpcy5vcHRpb25zLm5hbWUsXG4gICAgICAgICAgICAuLi50aGlzLm9wdGlvbnMuczNCdWNrZXRQcm9wcyxcbiAgICAgICAgfSk7ICAgICAgIFxuICAgIH1cbn0iXX0=