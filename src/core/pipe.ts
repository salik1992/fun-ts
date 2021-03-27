import { reduce } from '../array/reduce';
import { cond } from '../condition/cond';
import { AnyFn, PipeReturnType, SafeFn } from './types';

export const pipe = <
    T extends [AnyFn, ...AnyFn[]],
    U extends PipeReturnType<T>,
>(
    ...functions: T
    // @ts-ignore - not a problem and if it is then we want it to be
): SafeFn<U, (...args: Parameters<T[0]>) => U> => (
    ...parameters: Parameters<T[0]>
): U => cond(functions.length === 1)(
    // @ts-ignore - TS cannot count parameters
    () => functions[0](...parameters),
)(
    // @ts-ignore - TS cannot count parameters
    () => reduce((y, f) => f(y))(functions[0](...parameters))(functions.slice(1)),
);
