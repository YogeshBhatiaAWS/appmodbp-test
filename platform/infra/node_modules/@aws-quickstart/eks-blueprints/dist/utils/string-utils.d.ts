/**
 * Encode utf8 to Base64.
 * @param str
 * @returns
 */
export declare function btoa(str: string): string;
/**
 * Decode from base64 (to utf8).
 * @param b64Encoded
 * @returns
 */
export declare function atob(b64Encoded: string): string;
/**
 * Convert kebab case string to camel case
 * @param string
 * @returns
 */
export declare function kebabToCamel(str: string): string;
/**
 * Escape the dots in the string
 * @param string
 * @returns
 */
export declare function escapeDots(str: string): string;
/**
 * Removes either text between given tokens or just the tokens themselves.
 * Example use case: YAML manipulation similar to Helm: openToken = "{{ if ... }}", closeToken = "{{ end }}""
 * @param string
 * @returns
 */
export declare function changeTextBetweenTokens(str: string, openToken: string, closeToken: string, keep: boolean): string;
