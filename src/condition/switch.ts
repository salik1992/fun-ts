import { cond } from './cond';

type Case<T, U> = {
    value: T,
    branch: () => U,
    isDefaultCase?: true,
};

type GetReturnType<
    FirstCase extends Case<any, any>,
    OtherCases extends Case<any, any>[],
> = () => OtherCases extends [infer NextCase, ...infer NextOtherCases]
    ? NextCase extends Case<any, any>
        ? NextOtherCases extends Case<any, any>[]
            ? ReturnType<FirstCase['branch']> | GetReturnType<NextCase, NextOtherCases>
            : ReturnType<FirstCase['branch']> | ReturnType<NextCase['branch']>
        : ReturnType<FirstCase['branch']>
    : ReturnType<FirstCase['branch']>;

export const switches = <T>(testedValue: T) => <
    FirstCase extends Case<T, any>,
    OtherCases extends Case<T, any>[],
>(
    { value, branch, isDefaultCase }: FirstCase, ...cases: OtherCases
): GetReturnType<FirstCase, OtherCases> => (
    cond(isDefaultCase || testedValue === value)(
        branch,
    )(
        () => cond(cases.length > 0)(
            // @ts-ignore - TS cannot count parameters
            () => switches(testedValue)(...cases),
        )(
            () => undefined,
        ),
    )
);

export const switchCase = <T>(value: T) => <U>(branch: () => U): Case<T, U> => ({
    value, branch,
});

export const defaultCase = <T>(branch: () => T): Case<any, T> => ({
    value: undefined, branch, isDefaultCase: true,
});
