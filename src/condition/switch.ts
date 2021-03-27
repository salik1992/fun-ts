import { cond } from './cond';

type Case<T> = {
    condition: boolean,
    branch: () => T,
};

export const switches = ({ condition, branch }: Case<any>, ...cases: Case<any>[]): any => (
    cond(condition)(
        branch,
    )(
        () => cond(cases.length > 0)(
            // @ts-ignore - TS cannot count parameters
            switches(...cases),
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
