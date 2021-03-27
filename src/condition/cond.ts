type Branch = () => any;

type GetReturnValue<
    C extends boolean,
    R1, R2,
> = C extends true
    ? R1
    : C extends false
        ? R2
        : R1 | R2;

export const cond = <
    C extends boolean,
>(condition: C) => (
    <B1 extends Branch>(validBranch: B1) => <
        B2 extends Branch,
        R1 extends ReturnType<B1>,
        R2 extends ReturnType<B2>,
        ReturnValue extends GetReturnValue<C, R1, R2>,
    >(invalidBranch: B2): ReturnValue => (
        condition ? validBranch() : invalidBranch()
    )
);
