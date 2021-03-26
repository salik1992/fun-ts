import { reduceRight, reverse } from '../array';
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
): U => {
    // @ts-ignore - TS can't count
    const [fn1, ...otherFns] = reverse(functions);
    return functions.length === 1
        // @ts-ignore - TS can't count
        ? fn1(...parameters)
        // @ts-ignore - TS can't count
        : reduceRight((y, f) => f(y))(fn1(...parameters))(reverse(otherFns)) as U;
};
