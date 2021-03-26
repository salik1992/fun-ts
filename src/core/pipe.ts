import { reduce } from '../array';
import { AnyFn, PipeReturnType, SafeFn } from './types';

export const pipe = <
    T extends [AnyFn, ...AnyFn[]],
    U extends PipeReturnType<T>,
>(
    ...functions: T
    // @ts-ignore - not a problem and if it is then we want it to be
): SafeFn<U, (...args: Parameters<T[0]>) => U> => (
    ...parameters: Parameters<T[0]>
): U => {
    const [fn1, ...otherFns] = functions;
    // @ts-ignore - TS can't count
    if (functions.length === 1) return functions[0](...parameters);
    // @ts-ignore - TS can't count
    return reduce((y, f) => f(y))(fn1(...parameters))(otherFns) as U;
};
