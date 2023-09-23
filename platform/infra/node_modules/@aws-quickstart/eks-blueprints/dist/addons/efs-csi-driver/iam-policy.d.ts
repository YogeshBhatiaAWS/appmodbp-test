import * as kms from "aws-cdk-lib/aws-kms";
interface Statement {
    Effect: string;
    Action: string | string[];
    Resource: string | string[];
    Condition?: {
        StringEquals?: {
            [key: string]: string[] | string;
        };
        StringLike?: {
            [key: string]: string;
        };
        Bool?: {
            [key: string]: string;
        };
    };
}
export declare function getEfsDriverPolicyStatements(kmsKeys?: kms.Key[]): Statement[];
export {};
