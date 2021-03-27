import { reduce } from '../array/reduce';

export const sum = reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
)(0);
