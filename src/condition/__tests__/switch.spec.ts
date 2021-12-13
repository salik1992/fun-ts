import { switches, switchCase, defaultCase } from '../switch';

describe('switch', () => {
    it('should return the result of defaultCase if no value matches', () => {
        const a = 1;
        expect(switches(
            switchCase(0)(() => 1),
            switchCase(2)(() => 2),
            defaultCase(() => 3),
        )(a)).toBe(3);
    });

    it('should return undefined if no value matches', () => {
        const a = 1;
        expect(switches(
            switchCase(0)(() => 1),
            switchCase(2)(() => 2),
        )(a)).toBe(undefined);
    });

    it('should return the first value that matches', () => {
        expect(switches(
            switchCase(true)(() => 1),
            switchCase(true)(() => 2),
        )(true)).toBe(1);
    });
});
