export const forEach = <T>(
    eachFunction: (currentValue: T, index: number, array: T[]) => void,
) => (array: T[]) => array.forEach(eachFunction);
