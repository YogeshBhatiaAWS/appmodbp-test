/**
 * This is interface for the constraints needed to test asking for the key name of the object, the value being tested, and context for detailed Zod errors.
 */
export interface Constraint {
    validate(key: string, value: any, identifier: string): any;
}
/**
 * This validates if the given string (value) is within the bounds of min to max inclusive. If not a detailed Zod Error is thrown also utilizing the identifier for context.
 */
export declare class StringConstraint implements Constraint {
    readonly min?: number | undefined;
    readonly max?: number | undefined;
    constructor(min?: number | undefined, max?: number | undefined);
    validate(key: string, value: any, identifier: string): void;
}
/**
 * This is the same as StringConstraint, but also checks if the given string is a correctly formatted URL. If not a detailed Zod Error is thrown also utilizing the identifier for context.
 */
export declare class UrlStringConstraint implements StringConstraint {
    readonly min?: number | undefined;
    readonly max?: number | undefined;
    constructor(min?: number | undefined, max?: number | undefined);
    validate(key: string, value: any, identifier: string): void;
}
/**
 * This class checks if the given number (value) is within the bounds of the given min and max inclusive number bounds. If not a detailed Zod Error is thrown also utilizing the identifier for context.
 */
export declare class NumberConstraint implements Constraint {
    readonly min?: number | undefined;
    readonly max?: number | undefined;
    constructor(min?: number | undefined, max?: number | undefined);
    validate(key: string, value: any, identifier: string): void;
}
/**
 * This works just like NumberConstraint but checks the length of the given value for an expected array. If not a detailed Zod Error is thrown also utilizing the identifier for context.
 */
export declare class ArrayConstraint implements Constraint {
    readonly min?: number | undefined;
    readonly max?: number | undefined;
    constructor(min?: number | undefined, max?: number | undefined);
    validate(key: string, value: any, identifier: string): void;
}
/**
 * Checks whether a given string matches the regex.  If not, a detailed Zod Error is thrown.
 */
export declare class GenericRegexStringConstraint implements Constraint {
    readonly regex?: RegExp | undefined;
    constructor(regex?: RegExp | undefined);
    validate(key: string, value: any, identifier: string): void;
}
/**
 * Contains a list of constraints and checks whether a given value meets each constraint.  If not, a detailed Zod Error is thrown for that constraint.
 */
export declare class CompositeConstraint implements Constraint {
    readonly constraints: Array<Constraint>;
    constructor(...constraints: Array<Constraint>);
    validate(key: string, value: any, identifier: string): void;
}
/**
 * Checks whether a given string matches the regex for RFC 1123.  If not, a detailed Zod Error is thrown.
 */
export declare class InternetHostStringConstraint extends CompositeConstraint {
    constructor();
}
/**
 * The type that derives from a generic input structure, retaining the keys. Enables to define mapping between the input structure keys and constraints.
 */
export type ConstraintsType<T> = Partial<Record<keyof T, Constraint>>;
/**
 * This function validates the given object by the given constraints, and returns an error that uses the given context if needed.
 * @param constraints This is the keys of the object with specified values for validation.
 * @param context Object type name for error context purposes.
 * @param object The given object type, an array of or only a single object, to be validated.
 * @returns throws a Zod Error if validations are broken.
 */
export declare function validateConstraints<T>(constraints: ConstraintsType<T>, context: string, ...object: any): void;
