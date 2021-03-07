export const map = <T, U>(
    mapFunction: (item: T, index: number, array: T[]) => U,
) => (array: T[]) => array.map(mapFunction);
