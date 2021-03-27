export const find = <T>(
    predicate: (value: any, index: number, array: any[]) => value is T,
) => (array: any[]) => array.find(predicate);
