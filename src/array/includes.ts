export const includes = <T>(searchElement: T, fromIndex?: number) => (array: T[]) => (
    array.includes(searchElement, fromIndex)
);
