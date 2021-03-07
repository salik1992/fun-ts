export const condition = (
    (isTrue: Function) => (
        (isFalse: Function) => (
            (conditional: Function) => conditional(isTrue)(isFalse)
        )
    )
);
