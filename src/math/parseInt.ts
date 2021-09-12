export const parseInt = (radix: number = 10) => (number: string) => (
    Number.parseInt(number, radix)
);
