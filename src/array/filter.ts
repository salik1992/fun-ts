export const filter = <T>(
    predicate: (value: T, index: number, array: T[]) => boolean,
) => (array: T[]) => array.filter(predicate);
