import { reduceRight } from '../array/reduceRight';
import { cond } from '../condition/cond';
import {
    AnyFn, ComposeReturnType, SafeFn, Last,
} from './types';

export const compose = <
    T extends [...AnyFn[], AnyFn],
    U extends ComposeReturnType<T>,
>(
    ...functions: T
    // @ts-ignore - not a problem and if it is then we want it to be
): SafeFn<U, (...args: Parameters<Last<T>>) => U> => (
    ...parameters: Parameters<Last<T>>
): U => cond(functions.length === 1)(
    // @ts-ignore - TS cannout count parameters
    () => functions[0](...parameters),
)(
    // @ts-ignore - TS cannout count parameters
    () => reduceRight((y, f) => f(y))(functions[functions.length - 1](...parameters))(
        functions.slice(0, functions.length - 1),
    ),
);
