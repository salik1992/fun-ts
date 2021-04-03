export const findIndex = <T>(
    predicate: (value: T, index: number, array: T[]) => boolean,
) => (array: T[]) => array.findIndex(predicate);
