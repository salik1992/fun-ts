export const every = <T>(
    predicate: (value: T, index: number, array: T[]) => boolean,
) => (array: T[]) => array.every(predicate);
