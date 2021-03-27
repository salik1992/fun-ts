import { reduce } from '../array/reduce';

export const product = reduce(
    (accumulator: number, currentValue: number) => accumulator * currentValue,
)(1);
