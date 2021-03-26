export type TypeError<T> = {
    ERROR: T,
};

type Increment = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export type AnyFn = (arg: any) => any;

export type SafeFn<T, F> = (
    T extends TypeError<any>
        ? T
        : F
);

export type First<
    Functions,
> = (
    Functions extends [AnyFn, ...AnyFn[]]
        ? Functions extends [infer FirstFn, ...AnyFn[]]
            ? FirstFn
            : never
        : never
);

export type Last<
    Functions,
> = (
    Functions extends [...AnyFn[], AnyFn]
        ? Functions extends [...AnyFn[], infer LastFn]
            ? LastFn
            : never
        : never
);

type GeneralPipeReturnType<Functions, Index extends number = 1> = (
    Functions extends AnyFn[]
        ? Functions extends [fn1: infer Fn1, ...otherFns: AnyFn[]]
            ? Functions extends [fn1: Fn1, fn2: infer Fn2, ...otherFns: infer OtherFns]
                ? Fn1 extends (arg: any) => infer ReturnTypeFn1
                    ? Fn2 extends (arg: ReturnTypeFn1) => infer ReturnTypeFn2
                        ? OtherFns extends [AnyFn, ...AnyFn[]]
                            ? GeneralPipeReturnType<[Fn2, ...OtherFns], Increment[Index]>
                            : ReturnTypeFn2
                        : TypeError<[
                            'Can\'t pass result into next function at position',
                            Increment[Index], Fn1, '--> into -->', Fn2,
                        ]>
                    : TypeError<['Not a function at position', Index, Fn1]>
                : Fn1 extends AnyFn
                    ? ReturnType<Fn1>
                    : TypeError<['Not a function at position', Index, Fn1]>
            : TypeError<['Can\'t pass an empty array', Functions]>
        : TypeError<['Not an array of functions', Functions]>
);

export type PipeReturnType<
    Functions,
> = (
    Functions extends [AnyFn, ...AnyFn[]]
        ? GeneralPipeReturnType<Functions>
        : Functions extends [(...args: any) => infer Fn1ReturnType, ...(infer OtherFns)]
            ? OtherFns extends [AnyFn, ...AnyFn[]]
                ? GeneralPipeReturnType<[(arg: any) => Fn1ReturnType, ...OtherFns], 2>
                : Fn1ReturnType
            : TypeError<['Not an array of functions', Functions]>
);

type GeneralComposeReturnType<Functions, Index extends number = 1> = (
    Functions extends AnyFn[]
        ? Functions extends [...otherFns: AnyFn[], fn1: infer Fn1]
            ? Functions extends [...otherFns: infer OtherFns, fn2: infer Fn2, fn1: Fn1]
                ? Fn1 extends (arg: any) => infer ReturnTypeFn1
                    ? Fn2 extends (arg: ReturnTypeFn1) => infer ReturnTypeFn2
                        ? OtherFns extends [AnyFn, ...AnyFn[]]
                            ? GeneralComposeReturnType<[...OtherFns, Fn2], Increment[Index]>
                            : ReturnTypeFn2
                        : TypeError<[
                            'Can\'t pass result into next function at position (from right)',
                            Increment[Index], Fn1, '--> into -->', Fn2,
                        ]>
                    : TypeError<['Not a function at position (from right)', Index, Fn1]>
                : Fn1 extends AnyFn
                    ? ReturnType<Fn1>
                    : TypeError<['Not a function at position (from right)', Index, Fn1]>
            : TypeError<['Can\'t pass an empty array', Functions]>
        : TypeError<['Not an array of functions', Functions]>
);

export type ComposeReturnType<
    Functions,
> = (
    Functions extends [...AnyFn[], AnyFn]
        ? GeneralComposeReturnType<Functions>
        : Functions extends [...(infer OtherFns), (...args: any) => infer Fn1ReturnType]
            ? OtherFns extends [...AnyFn[], AnyFn]
                ? GeneralComposeReturnType<[...OtherFns, (arg: any) => Fn1ReturnType], 2>
                : Fn1ReturnType
            : TypeError<['Not an array of functions', Functions]>
);
