import { PolicyDocument } from "aws-cdk-lib/aws-iam";
import * as kms from "aws-cdk-lib/aws-kms";
export declare function getEbsDriverPolicyDocument(partition: string, kmsKeys?: kms.Key[]): PolicyDocument;
