export const sort = <T>(
    compareFn?: (a: T, b: T) => number,
) => (array: T[]) => array.sort(compareFn);
