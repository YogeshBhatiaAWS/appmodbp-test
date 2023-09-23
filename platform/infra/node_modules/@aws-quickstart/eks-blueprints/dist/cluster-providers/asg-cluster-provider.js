"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsgClusterProvider = void 0;
const generic_cluster_provider_1 = require("./generic-cluster-provider");
/**
 * AsgClusterProvider provisions an EKS cluster with an autoscaling group for self-managed capacity.
 */
class AsgClusterProvider extends generic_cluster_provider_1.GenericClusterProvider {
    constructor(props) {
        var _a, _b;
        super({ ...generic_cluster_provider_1.defaultOptions, ...props, ...{
                autoscalingNodeGroups: [{
                        id: (_b = (_a = props === null || props === void 0 ? void 0 : props.id) !== null && _a !== void 0 ? _a : props === null || props === void 0 ? void 0 : props.clusterName) !== null && _b !== void 0 ? _b : "eks-blueprints-asg",
                        ...props
                    }]
            } });
    }
}
exports.AsgClusterProvider = AsgClusterProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNnLWNsdXN0ZXItcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY2x1c3Rlci1wcm92aWRlcnMvYXNnLWNsdXN0ZXItcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EseUVBQW9GO0FBNkJwRjs7R0FFRztBQUNILE1BQWEsa0JBQW1CLFNBQVEsaURBQXNCO0lBRTFELFlBQVksS0FBK0I7O1FBQ3ZDLEtBQUssQ0FBQyxFQUFDLEdBQUcseUNBQWMsRUFBRSxHQUFHLEtBQUssRUFBRSxHQUFHO2dCQUNuQyxxQkFBcUIsRUFBRSxDQUFDO3dCQUNwQixFQUFFLEVBQUUsTUFBQSxNQUFBLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxFQUFFLG1DQUFJLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxXQUFXLG1DQUFJLG9CQUFvQjt3QkFDM0QsR0FBRyxLQUFrRDtxQkFDeEQsQ0FBQzthQUNMLEVBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztDQUNIO0FBVkYsZ0RBVUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBla3MgZnJvbSBcImF3cy1jZGstbGliL2F3cy1la3NcIjtcbmltcG9ydCB7IGRlZmF1bHRPcHRpb25zLCBHZW5lcmljQ2x1c3RlclByb3ZpZGVyIH0gZnJvbSBcIi4vZ2VuZXJpYy1jbHVzdGVyLXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBBdXRvc2NhbGluZ05vZGVHcm91cCB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbi8qKlxuICogQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgY2x1c3RlciBwcm92aWRlci5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBc2dDbHVzdGVyUHJvdmlkZXJQcm9wcyBleHRlbmRzIFBhcnRpYWw8ZWtzLkNvbW1vbkNsdXN0ZXJPcHRpb25zPiwgQXV0b3NjYWxpbmdOb2RlR3JvdXAge1xuICAgIFxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIGZvciB0aGUgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogSXMgaXQgYSBwcml2YXRlIG9ubHkgRUtTIENsdXN0ZXI/XG4gICAgICogRGVmYXVsdHMgdG8gcHJpdmF0ZV9hbmRfcHVibGljIGNsdXN0ZXIsIHNldCB0byB0cnVlIGZvciBwcml2YXRlIGNsdXN0ZXJcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIHByaXZhdGVDbHVzdGVyPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRhZ3MgZm9yIHRoZSBjbHVzdGVyXG4gICAgICovXG4gICAgdGFncz86IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICAgIH1cblxufVxuXG4vKipcbiAqIEFzZ0NsdXN0ZXJQcm92aWRlciBwcm92aXNpb25zIGFuIEVLUyBjbHVzdGVyIHdpdGggYW4gYXV0b3NjYWxpbmcgZ3JvdXAgZm9yIHNlbGYtbWFuYWdlZCBjYXBhY2l0eS5cbiAqL1xuZXhwb3J0IGNsYXNzIEFzZ0NsdXN0ZXJQcm92aWRlciBleHRlbmRzIEdlbmVyaWNDbHVzdGVyUHJvdmlkZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM/OiBBc2dDbHVzdGVyUHJvdmlkZXJQcm9wcykge1xuICAgICAgICBzdXBlcih7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLnByb3BzLCAuLi57XG4gICAgICAgICAgICBhdXRvc2NhbGluZ05vZGVHcm91cHM6IFt7XG4gICAgICAgICAgICAgICAgaWQ6IHByb3BzPy5pZCA/PyBwcm9wcz8uY2x1c3Rlck5hbWUgPz8gXCJla3MtYmx1ZXByaW50cy1hc2dcIixcbiAgICAgICAgICAgICAgICAuLi5wcm9wcyBhcyBPbWl0PEF1dG9zY2FsaW5nTm9kZUdyb3VwLCBcImlkXCIgfCBcInRhZ3NcIj5cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH19KTtcbiAgICB9XG4gfVxuIl19