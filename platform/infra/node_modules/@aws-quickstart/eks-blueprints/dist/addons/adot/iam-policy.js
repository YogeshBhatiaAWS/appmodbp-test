"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdotCollectorPolicyDocument = void 0;
const aws_iam_1 = require("aws-cdk-lib/aws-iam");
function getAdotCollectorPolicyDocument() {
    return aws_iam_1.PolicyDocument.fromJson({
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "aps:RemoteWrite"
                ],
                "Resource": "*"
            },
            {
                "Effect": "Allow",
                "Action": [
                    "cloudwatch:PutMetricData",
                    "ec2:DescribeVolumes",
                    "ec2:DescribeTags",
                    "logs:PutLogEvents",
                    "logs:DescribeLogStreams",
                    "logs:DescribeLogGroups",
                    "logs:CreateLogStream",
                    "logs:CreateLogGroup"
                ],
                "Resource": "*"
            },
            {
                "Effect": "Allow",
                "Action": [
                    "ssm:GetParameter"
                ],
                "Resource": "arn:aws:ssm:*:*:parameter/AmazonCloudWatch-*"
            },
            {
                "Effect": "Allow",
                "Action": [
                    "xray:PutTraceSegments",
                    "xray:PutTelemetryRecords",
                    "xray:GetSamplingRules",
                    "xray:GetSamplingTargets",
                    "xray:GetSamplingStatisticSummaries"
                ],
                "Resource": [
                    "*"
                ]
            }
        ]
    });
}
exports.getAdotCollectorPolicyDocument = getAdotCollectorPolicyDocument;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWFtLXBvbGljeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9hZGRvbnMvYWRvdC9pYW0tcG9saWN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlEQUFxRDtBQUVyRCxTQUFnQiw4QkFBOEI7SUFDMUMsT0FBTyx3QkFBYyxDQUFDLFFBQVEsQ0FBQztRQUN2QixTQUFTLEVBQUUsWUFBWTtRQUN2QixXQUFXLEVBQUU7WUFDVDtnQkFDSSxRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFO29CQUNOLGlCQUFpQjtpQkFDcEI7Z0JBQ0QsVUFBVSxFQUFFLEdBQUc7YUFDbEI7WUFDRDtnQkFDSSxRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFO29CQUNOLDBCQUEwQjtvQkFDMUIscUJBQXFCO29CQUNyQixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtvQkFDbkIseUJBQXlCO29CQUN6Qix3QkFBd0I7b0JBQ3hCLHNCQUFzQjtvQkFDdEIscUJBQXFCO2lCQUN4QjtnQkFDRCxVQUFVLEVBQUUsR0FBRzthQUNsQjtZQUNEO2dCQUNJLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUU7b0JBQ04sa0JBQWtCO2lCQUNyQjtnQkFDRCxVQUFVLEVBQUUsOENBQThDO2FBQzdEO1lBQ0Q7Z0JBQ0ksUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRTtvQkFDTix1QkFBdUI7b0JBQ3ZCLDBCQUEwQjtvQkFDMUIsdUJBQXVCO29CQUN2Qix5QkFBeUI7b0JBQ3pCLG9DQUFvQztpQkFDdkM7Z0JBQ0QsVUFBVSxFQUFFO29CQUNSLEdBQUc7aUJBQ047YUFDSjtTQUNKO0tBQ1IsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQS9DRCx3RUErQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb2xpY3lEb2N1bWVudCB9IGZyb20gXCJhd3MtY2RrLWxpYi9hd3MtaWFtXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBZG90Q29sbGVjdG9yUG9saWN5RG9jdW1lbnQoKSA6IFBvbGljeURvY3VtZW50IHtcbiAgICByZXR1cm4gUG9saWN5RG9jdW1lbnQuZnJvbUpzb24oe1xuICAgICAgICAgICAgXCJWZXJzaW9uXCI6IFwiMjAxMi0xMC0xN1wiLFxuICAgICAgICAgICAgXCJTdGF0ZW1lbnRcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJFZmZlY3RcIjogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgICBcIkFjdGlvblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFwczpSZW1vdGVXcml0ZVwiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFwiUmVzb3VyY2VcIjogXCIqXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJFZmZlY3RcIjogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgICBcIkFjdGlvblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsb3Vkd2F0Y2g6UHV0TWV0cmljRGF0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlYzI6RGVzY3JpYmVWb2x1bWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVjMjpEZXNjcmliZVRhZ3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibG9nczpQdXRMb2dFdmVudHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibG9nczpEZXNjcmliZUxvZ1N0cmVhbXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibG9nczpEZXNjcmliZUxvZ0dyb3Vwc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ0dyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgXCJSZXNvdXJjZVwiOiBcIipcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIkVmZmVjdFwiOiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQWN0aW9uXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3NtOkdldFBhcmFtZXRlclwiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFwiUmVzb3VyY2VcIjogXCJhcm46YXdzOnNzbToqOio6cGFyYW1ldGVyL0FtYXpvbkNsb3VkV2F0Y2gtKlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiRWZmZWN0XCI6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICAgICAgXCJBY3Rpb25cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4cmF5OlB1dFRyYWNlU2VnbWVudHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieHJheTpQdXRUZWxlbWV0cnlSZWNvcmRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInhyYXk6R2V0U2FtcGxpbmdSdWxlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4cmF5OkdldFNhbXBsaW5nVGFyZ2V0c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4cmF5OkdldFNhbXBsaW5nU3RhdGlzdGljU3VtbWFyaWVzXCJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgXCJSZXNvdXJjZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIipcIlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgIH0pO1xufVxuIl19