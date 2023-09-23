"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./certificate"), exports);
__exportStar(require("./hosted-zone"), exports);
__exportStar(require("./kms-key"), exports);
__exportStar(require("./iam"), exports);
__exportStar(require("./utils"), exports);
__exportStar(require("./vpc"), exports);
__exportStar(require("./efs"), exports);
__exportStar(require("./s3"), exports);
__exportStar(require("./amp"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvcmVzb3VyY2UtcHJvdmlkZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBOEI7QUFDOUIsZ0RBQThCO0FBQzlCLDRDQUEwQjtBQUMxQix3Q0FBc0I7QUFDdEIsMENBQXdCO0FBQ3hCLHdDQUFzQjtBQUN0Qix3Q0FBc0I7QUFDdEIsdUNBQXFCO0FBQ3JCLHdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vY2VydGlmaWNhdGUnO1xuZXhwb3J0ICogZnJvbSAnLi9ob3N0ZWQtem9uZSc7XG5leHBvcnQgKiBmcm9tICcuL2ttcy1rZXknO1xuZXhwb3J0ICogZnJvbSAnLi9pYW0nO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL3ZwYyc7XG5leHBvcnQgKiBmcm9tICcuL2Vmcyc7XG5leHBvcnQgKiBmcm9tICcuL3MzJztcbmV4cG9ydCAqIGZyb20gJy4vYW1wJztcbiJdfQ==