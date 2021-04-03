export const find = <T>(
    predicate: (value: T, index: number, array: T[]) => boolean,
) => (array: T[]) => array.find(predicate);
