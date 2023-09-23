export type OneArgFn<T> = (arg: any) => T;
/**
 * Symbol that uniquely designates that a particular proxy is instance of our DummyProxy
 */
export declare const isDynamicProxy: unique symbol;
/**
 * Symbol that retrieves the source function from the proxy. This function is expected to create the required target (e.g. resource).
 */
export declare const sourceFunction: unique symbol;
/**
 * Simple proxy implementation that will require resolution at runtime (enables lazy loading).
 * Unlike dynamic proxy that can create target on the fly, this proxy
 * just a place-holder that supplies the function that can be used to resolve the target.
 * Since most CDK constructs are not idempotent (meaning you can not call a create function twice, the second will fail)
 * this design choice was the simplest to support declarative resources.
 * Customers can clone the supplied JSON structure with cloneDeep and replace proxies with the actual targets as part of that process.
 */
export declare class DummyProxy<T extends object> implements ProxyHandler<T> {
    private source;
    constructor(source: OneArgFn<T>);
    get(_: T, key: PropertyKey): any;
}
/**
 * Function resolves the proxy with the target, that enables lazy loading use cases.
 * @param value potential proxy to resolve
 * @param arg represents the argument that should be passed to the resolution function (sourceFunction).
 * @returns
 */
export declare function resolveTarget(value: any, arg: any): any;
