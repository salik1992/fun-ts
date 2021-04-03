import { cond } from './cond';

type Case<T> = {
    condition: boolean,
    branch: () => T,
};

type GetReturnValue<
    FirstCase extends Case<any>,
    OtherCases extends Case<any>[],
> = FirstCase['condition'] extends true
    ? ReturnType<FirstCase['branch']>
    : OtherCases extends [infer NextCase, ...infer NextOtherCases]
        ? FirstCase['condition'] extends false
            ? NextCase extends Case<any>
                ? NextOtherCases extends Case<any>[]
                    ? GetReturnValue<NextCase, NextOtherCases>
                    : GetReturnValue<NextCase, []>
                : undefined
            : ReturnType<FirstCase['branch']> | (
                NextCase extends Case<any>
                    ? NextOtherCases extends Case<any>[]
                        ? GetReturnValue<NextCase, NextOtherCases>
                        : GetReturnValue<NextCase, []>
                    : undefined
            )
        : FirstCase['condition'] extends false
            ? undefined
            : ReturnType<FirstCase['branch']> | undefined;

export const switches = <
    FirstCase extends Case<any>,
    OtherCases extends Case<any>[],
    ReturnValue extends GetReturnValue<FirstCase, OtherCases>,
>({ condition, branch }: FirstCase, ...cases: OtherCases): ReturnValue => (
    cond(condition)(
        branch,
    )(
        () => cond(cases.length > 0)(
            // @ts-ignore - TS cannot count parameters
            () => switches(...cases),
        )(
            () => undefined,
        ),
    )
);

export const switchCase = (condition: boolean) => <T>(branch: () => T): Case<T> => ({
    condition, branch,
});

export const defaultCase = <T>(branch: () => T): Case<T> => ({
    condition: true, branch,
});
