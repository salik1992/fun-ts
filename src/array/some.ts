export const some = <T>(
    predicate: (value: T, index: number, array: T[]) => boolean,
) => (array: T[]) => array.some(predicate);
