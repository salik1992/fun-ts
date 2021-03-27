export const filter = <T>(
    predicate: (value: T, index: number, array: T[]) => value is T,
) => (array: any[]) => array.filter(predicate);
