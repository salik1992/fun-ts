export const reduceRight = <T>(
    reduceRightFunction: (lastValue: T, currentValue: T, index: number, array: T[]) => T,
) => (
    (initialValue: T) => (array: T[]) => array.reduceRight(reduceRightFunction, initialValue)
);
