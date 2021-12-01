export const filter = <T, U extends T = T>(
    predicate: (value: T, index: number, array: T[]) => boolean,
) => (array: T[]) => array.filter(predicate) as U[];
