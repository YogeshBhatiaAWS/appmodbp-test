"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsLoadbalancerControllerIamPolicy = void 0;
const AwsLoadbalancerControllerIamPolicy = (partition) => {
    return {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": "iam:CreateServiceLinkedRole",
                "Resource": "*",
                "Condition": {
                    "StringEquals": {
                        "iam:AWSServiceName": "elasticloadbalancing.amazonaws.com"
                    }
                }
            },
            {
                "Effect": "Allow",
                "Action": [
                    "ec2:DescribeAccountAttributes",
                    "ec2:DescribeAddresses",
                    "ec2:DescribeAvailabilityZones",
                    "ec2:DescribeInternetGateways",
                    "ec2:DescribeVpcs",
                    "ec2:DescribeVpcPeeringConnections",
                    "ec2:DescribeSubnets",
                    "ec2:DescribeSecurityGroups",
                    "ec2:DescribeInstances",
                    "ec2:DescribeNetworkInterfaces",
                    "ec2:DescribeTags",
                    "ec2:GetCoipPoolUsage",
                    "ec2:DescribeCoipPools",
                    "elasticloadbalancing:DescribeLoadBalancers",
                    "elasticloadbalancing:DescribeLoadBalancerAttributes",
                    "elasticloadbalancing:DescribeListeners",
                    "elasticloadbalancing:DescribeListenerCertificates",
                    "elasticloadbalancing:DescribeSSLPolicies",
                    "elasticloadbalancing:DescribeRules",
                    "elasticloadbalancing:DescribeTargetGroups",
                    "elasticloadbalancing:DescribeTargetGroupAttributes",
                    "elasticloadbalancing:DescribeTargetHealth",
                    "elasticloadbalancing:DescribeTags"
                ],
                "Resource": "*"
            },
            {
                "Effect": "Allow",
                "Action": [
                    "cognito-idp:DescribeUserPoolClient",
                    "acm:ListCertificates",
                    "acm:DescribeCertificate",
                    "iam:ListServerCertificates",
                    "iam:GetServerCertificate",
                    "waf-regional:GetWebACL",
                    "waf-regional:GetWebACLForResource",
                    "waf-regional:AssociateWebACL",
                    "waf-regional:DisassociateWebACL",
                    "wafv2:GetWebACL",
                    "wafv2:GetWebACLForResource",
                    "wafv2:AssociateWebACL",
                    "wafv2:DisassociateWebACL",
                    "shield:GetSubscriptionState",
                    "shield:DescribeProtection",
                    "shield:CreateProtection",
                    "shield:DeleteProtection"
                ],
                "Resource": "*"
            },
            {
                "Effect": "Allow",
                "Action": [
                    "ec2:AuthorizeSecurityGroupIngress",
                    "ec2:RevokeSecurityGroupIngress"
                ],
                "Resource": "*"
            },
            {
                "Effect": "Allow",
                "Action": [
                    "ec2:CreateSecurityGroup"
                ],
                "Resource": "*"
            },
            {
                "Effect": "Allow",
                "Action": [
                    "ec2:CreateTags"
                ],
                "Resource": `arn:${partition}:ec2:*:*:security-group/*`,
                "Condition": {
                    "StringEquals": {
                        "ec2:CreateAction": "CreateSecurityGroup"
                    },
                    "Null": {
                        "aws:RequestTag/elbv2.k8s.aws/cluster": "false"
                    }
                }
            },
            {
                "Effect": "Allow",
                "Action": [
                    "ec2:CreateTags",
                    "ec2:DeleteTags"
                ],
                "Resource": `arn:${partition}:ec2:*:*:security-group/*`,
                "Condition": {
                    "Null": {
                        "aws:RequestTag/elbv2.k8s.aws/cluster": "true",
                        "aws:ResourceTag/elbv2.k8s.aws/cluster": "false"
                    }
                }
            },
            {
                "Effect": "Allow",
                "Action": [
                    "ec2:AuthorizeSecurityGroupIngress",
                    "ec2:RevokeSecurityGroupIngress",
                    "ec2:DeleteSecurityGroup"
                ],
                "Resource": "*",
                "Condition": {
                    "Null": {
                        "aws:ResourceTag/elbv2.k8s.aws/cluster": "false"
                    }
                }
            },
            {
                "Effect": "Allow",
                "Action": [
                    "elasticloadbalancing:CreateLoadBalancer",
                    "elasticloadbalancing:CreateTargetGroup"
                ],
                "Resource": "*",
                "Condition": {
                    "Null": {
                        "aws:RequestTag/elbv2.k8s.aws/cluster": "false"
                    }
                }
            },
            {
                "Effect": "Allow",
                "Action": [
                    "elasticloadbalancing:CreateListener",
                    "elasticloadbalancing:DeleteListener",
                    "elasticloadbalancing:CreateRule",
                    "elasticloadbalancing:DeleteRule"
                ],
                "Resource": "*"
            },
            {
                "Effect": "Allow",
                "Action": [
                    "elasticloadbalancing:AddTags",
                    "elasticloadbalancing:RemoveTags"
                ],
                "Resource": [
                    `arn:${partition}:elasticloadbalancing:*:*:targetgroup/*/*`,
                    `arn:${partition}:elasticloadbalancing:*:*:loadbalancer/net/*/*`,
                    `arn:${partition}:elasticloadbalancing:*:*:loadbalancer/app/*/*`
                ],
                "Condition": {
                    "Null": {
                        "aws:RequestTag/elbv2.k8s.aws/cluster": "true",
                        "aws:ResourceTag/elbv2.k8s.aws/cluster": "false"
                    }
                }
            },
            {
                "Effect": "Allow",
                "Action": [
                    "elasticloadbalancing:AddTags",
                    "elasticloadbalancing:RemoveTags"
                ],
                "Resource": [
                    `arn:${partition}:elasticloadbalancing:*:*:listener/net/*/*/*`,
                    `arn:${partition}:elasticloadbalancing:*:*:listener/app/*/*/*`,
                    `arn:${partition}:elasticloadbalancing:*:*:listener-rule/net/*/*/*`,
                    `arn:${partition}:elasticloadbalancing:*:*:listener-rule/app/*/*/*`
                ]
            },
            {
                "Effect": "Allow",
                "Action": [
                    "elasticloadbalancing:ModifyLoadBalancerAttributes",
                    "elasticloadbalancing:SetIpAddressType",
                    "elasticloadbalancing:SetSecurityGroups",
                    "elasticloadbalancing:SetSubnets",
                    "elasticloadbalancing:DeleteLoadBalancer",
                    "elasticloadbalancing:ModifyTargetGroup",
                    "elasticloadbalancing:ModifyTargetGroupAttributes",
                    "elasticloadbalancing:DeleteTargetGroup"
                ],
                "Resource": "*",
                "Condition": {
                    "Null": {
                        "aws:ResourceTag/elbv2.k8s.aws/cluster": "false"
                    }
                }
            },
            {
                "Effect": "Allow",
                "Action": [
                    "elasticloadbalancing:AddTags"
                ],
                "Resource": [
                    `arn:${partition}:elasticloadbalancing:*:*:targetgroup/*/*`,
                    `arn:${partition}:elasticloadbalancing:*:*:loadbalancer/net/*/*`,
                    `arn:${partition}:elasticloadbalancing:*:*:loadbalancer/app/*/*`
                ],
                "Condition": {
                    "StringEquals": {
                        "elasticloadbalancing:CreateAction": [
                            "CreateTargetGroup",
                            "CreateLoadBalancer"
                        ]
                    },
                    "Null": {
                        "aws:RequestTag/elbv2.k8s.aws/cluster": "false"
                    }
                }
            },
            {
                "Effect": "Allow",
                "Action": [
                    "elasticloadbalancing:RegisterTargets",
                    "elasticloadbalancing:DeregisterTargets"
                ],
                "Resource": `arn:${partition}:elasticloadbalancing:*:*:targetgroup/*/*`
            },
            {
                "Effect": "Allow",
                "Action": [
                    "elasticloadbalancing:SetWebAcl",
                    "elasticloadbalancing:ModifyListener",
                    "elasticloadbalancing:AddListenerCertificates",
                    "elasticloadbalancing:RemoveListenerCertificates",
                    "elasticloadbalancing:ModifyRule"
                ],
                "Resource": "*"
            }
        ]
    };
};
exports.AwsLoadbalancerControllerIamPolicy = AwsLoadbalancerControllerIamPolicy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWFtLXBvbGljeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9hZGRvbnMvYXdzLWxvYWRiYWxhbmNlci1jb250cm9sbGVyL2lhbS1wb2xpY3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxrQ0FBa0MsR0FBRyxDQUFDLFNBQWlCLEVBQUUsRUFBRTtJQUNwRSxPQUFPO1FBQ0gsU0FBUyxFQUFFLFlBQVk7UUFDdkIsV0FBVyxFQUFFO1lBQ1Q7Z0JBQ0ksUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFVBQVUsRUFBRSxHQUFHO2dCQUNmLFdBQVcsRUFBRTtvQkFDVCxjQUFjLEVBQUU7d0JBQ1osb0JBQW9CLEVBQUUsb0NBQW9DO3FCQUM3RDtpQkFDSjthQUNKO1lBQ0Q7Z0JBQ0ksUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRTtvQkFDTiwrQkFBK0I7b0JBQy9CLHVCQUF1QjtvQkFDdkIsK0JBQStCO29CQUMvQiw4QkFBOEI7b0JBQzlCLGtCQUFrQjtvQkFDbEIsbUNBQW1DO29CQUNuQyxxQkFBcUI7b0JBQ3JCLDRCQUE0QjtvQkFDNUIsdUJBQXVCO29CQUN2QiwrQkFBK0I7b0JBQy9CLGtCQUFrQjtvQkFDbEIsc0JBQXNCO29CQUN0Qix1QkFBdUI7b0JBQ3ZCLDRDQUE0QztvQkFDNUMscURBQXFEO29CQUNyRCx3Q0FBd0M7b0JBQ3hDLG1EQUFtRDtvQkFDbkQsMENBQTBDO29CQUMxQyxvQ0FBb0M7b0JBQ3BDLDJDQUEyQztvQkFDM0Msb0RBQW9EO29CQUNwRCwyQ0FBMkM7b0JBQzNDLG1DQUFtQztpQkFDdEM7Z0JBQ0QsVUFBVSxFQUFFLEdBQUc7YUFDbEI7WUFDRDtnQkFDSSxRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFO29CQUNOLG9DQUFvQztvQkFDcEMsc0JBQXNCO29CQUN0Qix5QkFBeUI7b0JBQ3pCLDRCQUE0QjtvQkFDNUIsMEJBQTBC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YW5jZXJDb250cm9sbGVySWFtUG9saWN5ID0gKHBhcnRpdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJWZXJzaW9uXCI6IFwiMjAxMi0xMC0xN1wiLFxuICAgICAgICBcIlN0YXRlbWVudFwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJFZmZlY3RcIjogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgIFwiQWN0aW9uXCI6IFwiaWFtOkNyZWF0ZVNlcnZpY2VMaW5rZWRSb2xlXCIsXG4gICAgICAgICAgICAgICAgXCJSZXNvdXJjZVwiOiBcIipcIixcbiAgICAgICAgICAgICAgICBcIkNvbmRpdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiU3RyaW5nRXF1YWxzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaWFtOkFXU1NlcnZpY2VOYW1lXCI6IFwiZWxhc3RpY2xvYWRiYWxhbmNpbmcuYW1hem9uYXdzLmNvbVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiRWZmZWN0XCI6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICBcIkFjdGlvblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZWMyOkRlc2NyaWJlQWNjb3VudEF0dHJpYnV0ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlYzI6RGVzY3JpYmVBZGRyZXNzZXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlYzI6RGVzY3JpYmVBdmFpbGFiaWxpdHlab25lc1wiLFxuICAgICAgICAgICAgICAgICAgICBcImVjMjpEZXNjcmliZUludGVybmV0R2F0ZXdheXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlYzI6RGVzY3JpYmVWcGNzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZWMyOkRlc2NyaWJlVnBjUGVlcmluZ0Nvbm5lY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZWMyOkRlc2NyaWJlU3VibmV0c1wiLFxuICAgICAgICAgICAgICAgICAgICBcImVjMjpEZXNjcmliZVNlY3VyaXR5R3JvdXBzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZWMyOkRlc2NyaWJlSW5zdGFuY2VzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZWMyOkRlc2NyaWJlTmV0d29ya0ludGVyZmFjZXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlYzI6RGVzY3JpYmVUYWdzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZWMyOkdldENvaXBQb29sVXNhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlYzI6RGVzY3JpYmVDb2lwUG9vbHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlbGFzdGljbG9hZGJhbGFuY2luZzpEZXNjcmliZUxvYWRCYWxhbmNlcnNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlbGFzdGljbG9hZGJhbGFuY2luZzpEZXNjcmliZUxvYWRCYWxhbmNlckF0dHJpYnV0ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlbGFzdGljbG9hZGJhbGFuY2luZzpEZXNjcmliZUxpc3RlbmVyc1wiLFxuICAgICAgICAgICAgICAgICAgICBcImVsYXN0aWNsb2FkYmFsYW5jaW5nOkRlc2NyaWJlTGlzdGVuZXJDZXJ0aWZpY2F0ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlbGFzdGljbG9hZGJhbGFuY2luZzpEZXNjcmliZVNTTFBvbGljaWVzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZWxhc3RpY2xvYWRiYWxhbmNpbmc6RGVzY3JpYmVSdWxlc1wiLFxuICAgICAgICAgICAgICAgICAgICBcImVsYXN0aWNsb2FkYmFsYW5jaW5nOkRlc2NyaWJlVGFyZ2V0R3JvdXBzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZWxhc3RpY2xvYWRiYWxhbmNpbmc6RGVzY3JpYmVUYXJnZXRHcm91cEF0dHJpYnV0ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlbGFzdGljbG9hZGJhbGFuY2luZzpEZXNjcmliZVRhcmdldEhlYWx0aFwiLFxuICAgICAgICAgICAgICAgICAgICBcImVsYXN0aWNsb2FkYmFsYW5jaW5nOkRlc2NyaWJlVGFnc1wiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcIlJlc291cmNlXCI6IFwiKlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiRWZmZWN0XCI6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICBcIkFjdGlvblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiY29nbml0by1pZHA6RGVzY3JpYmVVc2VyUG9vbENsaWVudFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFjbTpMaXN0Q2VydGlmaWNhdGVzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWNtOkRlc2NyaWJlQ2VydGlmaWNhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpYW06TGlzdFNlcnZlckNlcnRpZmljYXRlc1wiLFxuICAgICAgICAgICAgICAgICAgICBcImlhbTpHZXRTZXJ2ZXJDZXJ0aWZpY2F0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndhZi1yZWdpb25hbDpHZXRXZWJBQ0xcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3YWYtcmVnaW9uYWw6R2V0V2ViQUNMRm9yUmVzb3VyY2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3YWYtcmVnaW9uYWw6QXNzb2NpYXRlV2ViQUNMXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2FmLXJlZ2lvbmFsOkRpc2Fzc29jaWF0ZVdlYkFDTFwiLFxuICAgICAgICAgICAgICAgICAgICBcIndhZnYyOkdldFdlYkFDTFwiLFxuICAgICAgICAgICAgICAgICAgICBcIndhZnYyOkdldFdlYkFDTEZvclJlc291cmNlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2FmdjI6QXNzb2NpYXRlV2ViQUNMXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2FmdjI6RGlzYXNzb2NpYXRlV2ViQUNMXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic2hpZWxkOkdldFN1YnNjcmlwdGlvblN0YXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic2hpZWxkOkRlc2NyaWJlUHJvdGVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBcInNoaWVsZDpDcmVhdGVQcm90ZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic2hpZWxkOkRlbGV0ZVByb3RlY3Rpb25cIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJSZXNvdXJjZVwiOiBcIipcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIkVmZmVjdFwiOiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgXCJBY3Rpb25cIjogW1xuICAgICAgICAgICAgICAgICAgICBcImVjMjpBdXRob3JpemVTZWN1cml0eUdyb3VwSW5ncmVzc1wiLFxuICAgICAgICAgICAgICAgICAgICBcImVjMjpSZXZva2VTZWN1cml0eUdyb3VwSW5ncmVzc1wiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcIlJlc291cmNlXCI6IFwiKlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiRWZmZWN0XCI6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICBcIkFjdGlvblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZWMyOkNyZWF0ZVNlY3VyaXR5R3JvdXBcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJSZXNvdXJjZVwiOiBcIipcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIkVmZmVjdFwiOiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgXCJBY3Rpb25cIjogW1xuICAgICAgICAgICAgICAgICAgICBcImVjMjpDcmVhdGVUYWdzXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiUmVzb3VyY2VcIjogYGFybjoke3BhcnRpdGlvbn06ZWMyOio6KjpzZWN1cml0eS1ncm91cC8qYCxcbiAgICAgICAgICAgICAgICBcIkNvbmRpdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiU3RyaW5nRXF1YWxzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZWMyOkNyZWF0ZUFjdGlvblwiOiBcIkNyZWF0ZVNlY3VyaXR5R3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIk51bGxcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJhd3M6UmVxdWVzdFRhZy9lbGJ2Mi5rOHMuYXdzL2NsdXN0ZXJcIjogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiRWZmZWN0XCI6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICBcIkFjdGlvblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZWMyOkNyZWF0ZVRhZ3NcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlYzI6RGVsZXRlVGFnc1wiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcIlJlc291cmNlXCI6IGBhcm46JHtwYXJ0aXRpb259OmVjMjoqOio6c2VjdXJpdHktZ3JvdXAvKmAsXG4gICAgICAgICAgICAgICAgXCJDb25kaXRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgICBcIk51bGxcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJhd3M6UmVxdWVzdFRhZy9lbGJ2Mi5rOHMuYXdzL2NsdXN0ZXJcIjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImF3czpSZXNvdXJjZVRhZy9lbGJ2Mi5rOHMuYXdzL2NsdXN0ZXJcIjogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiRWZmZWN0XCI6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICBcIkFjdGlvblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZWMyOkF1dGhvcml6ZVNlY3VyaXR5R3JvdXBJbmdyZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZWMyOlJldm9rZVNlY3VyaXR5R3JvdXBJbmdyZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZWMyOkRlbGV0ZVNlY3VyaXR5R3JvdXBcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJSZXNvdXJjZVwiOiBcIipcIixcbiAgICAgICAgICAgICAgICBcIkNvbmRpdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiTnVsbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImF3czpSZXNvdXJjZVRhZy9lbGJ2Mi5rOHMuYXdzL2NsdXN0ZXJcIjogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiRWZmZWN0XCI6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICBcIkFjdGlvblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZWxhc3RpY2xvYWRiYWxhbmNpbmc6Q3JlYXRlTG9hZEJhbGFuY2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZWxhc3RpY2xvYWRiYWxhbmNpbmc6Q3JlYXRlVGFyZ2V0R3JvdXBcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJSZXNvdXJjZVwiOiBcIipcIixcbiAgICAgICAgICAgICAgICBcIkNvbmRpdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiTnVsbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImF3czpSZXF1ZXN0VGFnL2VsYnYyLms4cy5hd3MvY2x1c3RlclwiOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJFZmZlY3RcIjogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgIFwiQWN0aW9uXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJlbGFzdGljbG9hZGJhbGFuY2luZzpDcmVhdGVMaXN0ZW5lclwiLFxuICAgICAgICAgICAgICAgICAgICBcImVsYXN0aWNsb2FkYmFsYW5jaW5nOkRlbGV0ZUxpc3RlbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZWxhc3RpY2xvYWRiYWxhbmNpbmc6Q3JlYXRlUnVsZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImVsYXN0aWNsb2FkYmFsYW5jaW5nOkRlbGV0ZVJ1bGVcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJSZXNvdXJjZVwiOiBcIipcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIkVmZmVjdFwiOiBcIkFsbG93XCIsXG4gICAgICAgICAgICAgICAgXCJBY3Rpb25cIjogW1xuICAgICAgICAgICAgICAgICAgICBcImVsYXN0aWNsb2FkYmFsYW5jaW5nOkFkZFRhZ3NcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlbGFzdGljbG9hZGJhbGFuY2luZzpSZW1vdmVUYWdzXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiUmVzb3VyY2VcIjogW1xuICAgICAgICAgICAgICAgICAgICBgYXJuOiR7cGFydGl0aW9ufTplbGFzdGljbG9hZGJhbGFuY2luZzoqOio6dGFyZ2V0Z3JvdXAvKi8qYCxcbiAgICAgICAgICAgICAgICAgICAgYGFybjoke3BhcnRpdGlvbn06ZWxhc3RpY2xvYWRiYWxhbmNpbmc6KjoqOmxvYWRiYWxhbmNlci9uZXQvKi8qYCxcbiAgICAgICAgICAgICAgICAgICAgYGFybjoke3BhcnRpdGlvbn06ZWxhc3RpY2xvYWRiYWxhbmNpbmc6KjoqOmxvYWRiYWxhbmNlci9hcHAvKi8qYFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJDb25kaXRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgICBcIk51bGxcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJhd3M6UmVxdWVzdFRhZy9lbGJ2Mi5rOHMuYXdzL2NsdXN0ZXJcIjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImF3czpSZXNvdXJjZVRhZy9lbGJ2Mi5rOHMuYXdzL2NsdXN0ZXJcIjogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiRWZmZWN0XCI6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICBcIkFjdGlvblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZWxhc3RpY2xvYWRiYWxhbmNpbmc6QWRkVGFnc1wiLFxuICAgICAgICAgICAgICAgICAgICBcImVsYXN0aWNsb2FkYmFsYW5jaW5nOlJlbW92ZVRhZ3NcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJSZXNvdXJjZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIGBhcm46JHtwYXJ0aXRpb259OmVsYXN0aWNsb2FkYmFsYW5jaW5nOio6KjpsaXN0ZW5lci9uZXQvKi8qLypgLFxuICAgICAgICAgICAgICAgICAgICBgYXJuOiR7cGFydGl0aW9ufTplbGFzdGljbG9hZGJhbGFuY2luZzoqOio6bGlzdGVuZXIvYXBwLyovKi8qYCxcbiAgICAgICAgICAgICAgICAgICAgYGFybjoke3BhcnRpdGlvbn06ZWxhc3RpY2xvYWRiYWxhbmNpbmc6KjoqOmxpc3RlbmVyLXJ1bGUvbmV0LyovKi8qYCxcbiAgICAgICAgICAgICAgICAgICAgYGFybjoke3BhcnRpdGlvbn06ZWxhc3RpY2xvYWRiYWxhbmNpbmc6KjoqOmxpc3RlbmVyLXJ1bGUvYXBwLyovKi8qYFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJFZmZlY3RcIjogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgIFwiQWN0aW9uXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJlbGFzdGljbG9hZGJhbGFuY2luZzpNb2RpZnlMb2FkQmFsYW5jZXJBdHRyaWJ1dGVzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZWxhc3RpY2xvYWRiYWxhbmNpbmc6U2V0SXBBZGRyZXNzVHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImVsYXN0aWNsb2FkYmFsYW5jaW5nOlNldFNlY3VyaXR5R3JvdXBzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZWxhc3RpY2xvYWRiYWxhbmNpbmc6U2V0U3VibmV0c1wiLFxuICAgICAgICAgICAgICAgICAgICBcImVsYXN0aWNsb2FkYmFsYW5jaW5nOkRlbGV0ZUxvYWRCYWxhbmNlclwiLFxuICAgICAgICAgICAgICAgICAgICBcImVsYXN0aWNsb2FkYmFsYW5jaW5nOk1vZGlmeVRhcmdldEdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZWxhc3RpY2xvYWRiYWxhbmNpbmc6TW9kaWZ5VGFyZ2V0R3JvdXBBdHRyaWJ1dGVzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZWxhc3RpY2xvYWRiYWxhbmNpbmc6RGVsZXRlVGFyZ2V0R3JvdXBcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJSZXNvdXJjZVwiOiBcIipcIixcbiAgICAgICAgICAgICAgICBcIkNvbmRpdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiTnVsbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImF3czpSZXNvdXJjZVRhZy9lbGJ2Mi5rOHMuYXdzL2NsdXN0ZXJcIjogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiRWZmZWN0XCI6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICBcIkFjdGlvblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZWxhc3RpY2xvYWRiYWxhbmNpbmc6QWRkVGFnc1wiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcIlJlc291cmNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgYGFybjoke3BhcnRpdGlvbn06ZWxhc3RpY2xvYWRiYWxhbmNpbmc6KjoqOnRhcmdldGdyb3VwLyovKmAsXG4gICAgICAgICAgICAgICAgICAgIGBhcm46JHtwYXJ0aXRpb259OmVsYXN0aWNsb2FkYmFsYW5jaW5nOio6Kjpsb2FkYmFsYW5jZXIvbmV0LyovKmAsXG4gICAgICAgICAgICAgICAgICAgIGBhcm46JHtwYXJ0aXRpb259OmVsYXN0aWNsb2FkYmFsYW5jaW5nOio6Kjpsb2FkYmFsYW5jZXIvYXBwLyovKmBcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiQ29uZGl0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJTdHJpbmdFcXVhbHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJlbGFzdGljbG9hZGJhbGFuY2luZzpDcmVhdGVBY3Rpb25cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ3JlYXRlVGFyZ2V0R3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNyZWF0ZUxvYWRCYWxhbmNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiTnVsbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImF3czpSZXF1ZXN0VGFnL2VsYnYyLms4cy5hd3MvY2x1c3RlclwiOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJFZmZlY3RcIjogXCJBbGxvd1wiLFxuICAgICAgICAgICAgICAgIFwiQWN0aW9uXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJlbGFzdGljbG9hZGJhbGFuY2luZzpSZWdpc3RlclRhcmdldHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlbGFzdGljbG9hZGJhbGFuY2luZzpEZXJlZ2lzdGVyVGFyZ2V0c1wiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcIlJlc291cmNlXCI6IGBhcm46JHtwYXJ0aXRpb259OmVsYXN0aWNsb2FkYmFsYW5jaW5nOio6Kjp0YXJnZXRncm91cC8qLypgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiRWZmZWN0XCI6IFwiQWxsb3dcIixcbiAgICAgICAgICAgICAgICBcIkFjdGlvblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZWxhc3RpY2xvYWRiYWxhbmNpbmc6U2V0V2ViQWNsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZWxhc3RpY2xvYWRiYWxhbmNpbmc6TW9kaWZ5TGlzdGVuZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlbGFzdGljbG9hZGJhbGFuY2luZzpBZGRMaXN0ZW5lckNlcnRpZmljYXRlc1wiLFxuICAgICAgICAgICAgICAgICAgICBcImVsYXN0aWNsb2FkYmFsYW5jaW5nOlJlbW92ZUxpc3RlbmVyQ2VydGlmaWNhdGVzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZWxhc3RpY2xvYWRiYWxhbmNpbmc6TW9kaWZ5UnVsZVwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcIlJlc291cmNlXCI6IFwiKlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9O1xufTsiXX0=