import { Logger } from "tslog";
/**
 * User log is a logger for user info. Does not display callstack
 */
export declare const userLog: Logger<unknown>;
/**
 * Standard developer logger for troubleshooting. Will leverage sourcemap support.
 */
export declare const logger: Logger<unknown>;
