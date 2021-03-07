import { reduceRight } from '../array';
import { GetLastIndexType } from './types';

export const compose = <
    T extends ((arg: any) => any)[],
    U extends ReturnType<T[0]>,
    V extends GetLastIndexType<T>,
    // @ts-ignore
    W extends Parameters<V>[0],
>(...functions: T) => (value: W): U => (
    // @ts-ignore
    reduceRight((y, f) => f(y))(value)(functions) as unknown as U
);
