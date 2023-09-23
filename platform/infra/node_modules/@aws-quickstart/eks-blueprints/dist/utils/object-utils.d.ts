export declare const setPath: (obj: any, path: string, val: any) => void;
/**
 * Creates a deep clone of an object, retaining types.
 * @param source
 * @param resolveFn if passed, this function can perform transformation (e.g. resolve proxies)
 * @returns
 */
export declare function cloneDeep<T>(source: T, resolveFn?: (arg: any) => any): T;
export type Writeable<T> = {
    -readonly [P in keyof T]: T[P];
};
