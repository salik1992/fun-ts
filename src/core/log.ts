export const log = <T extends any>(label: string) => (value: T): T => {
    // eslint-disable-next-line no-console
    console.log(label, value);
    return value;
};
