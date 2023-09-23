interface Statement {
    Effect: string;
    Action: string | string[];
    Resource: string | string[];
}
export declare function getCloudWatchLogsPolicyDocument(): Statement[];
export {};
