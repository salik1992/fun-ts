export type GetLastIndexType<T> = T extends (
    [...elements: any, lastElement: (infer U)]
) ? U : never;
