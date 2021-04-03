export const find = <T>(
    predicate: (value: any, index: number, array: any[]) => boolean,
) => (array: any[]) => array.find(predicate);
