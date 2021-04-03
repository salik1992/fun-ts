export const findIndex = <T>(
    predicate: (value: any, index: number, array: any[]) => boolean,
) => (array: any[]) => array.findIndex(predicate);
