import { switches, switchCase, defaultCase } from '../switch';

describe('switch', () => {
    it('should return the result of defaultCase if no condition matches', () => {
        const a = 1 as number;
        const b = 2 as number;
        expect(switches(
            switchCase(a === b)(() => 1),
            switchCase(a > b)(() => 2),
            defaultCase(() => 3),
        )).toBe(3);
    });

    it('should return undefined if no condition matches', () => {
        const a = 1 as number;
        const b = 2 as number;
        expect(switches(
            switchCase(a === b)(() => 1),
            switchCase(a > b)(() => 2),
        )).toBe(undefined);
    });

    it('should return the first condition that matches', () => {
        expect(switches(
            switchCase(true)(() => 1),
            switchCase(true)(() => 2),
        )).toBe(1);
    });
});
