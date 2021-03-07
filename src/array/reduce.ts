export const reduce = <T, U>(reduceFunction: (
    accumulator: T, currentValue: U, index: number, array: U[],
) => T) => (initialValue: T) => (array: U[]): T => (
    array.reduce(reduceFunction, initialValue)
);
