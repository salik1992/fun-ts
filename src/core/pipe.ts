import { reduce } from '../array';
import { GetLastIndexType } from './types';

export const pipe = <
    T extends ((arg: any) => any)[],
    U extends Parameters<T[0]>[0],
    V extends GetLastIndexType<T>,
    // @ts-ignore
    W extends ReturnType<V>,
>(...functions: T) => (value: U): W => (
    // @ts-ignore
    reduce((y, f) => f(y))(value)(functions) as unknown as W
);
