export const findIndex = <T>(
    predicate: (value: any, index: number, array: any[]) => value is T,
) => (array: any[]) => array.findIndex(predicate);
