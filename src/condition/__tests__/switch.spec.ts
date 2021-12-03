import { switches, switchCase, defaultCase } from '../switch';

describe('switch', () => {
    it('should return the result of defaultCase if no value matches', () => {
        const a = 1;
        expect(switches(a)(
            switchCase(0)(() => 1),
            switchCase(2)(() => 2),
            defaultCase(() => 3),
        )).toBe(3);
    });

    it('should return undefined if no value matches', () => {
        const a = 1;
        expect(switches(a)(
            switchCase(0)(() => 1),
            switchCase(2)(() => 2),
        )).toBe(undefined);
    });

    it('should return the first value that matches', () => {
        expect(switches(true)(
            switchCase(true)(() => 1),
            switchCase(true)(() => 2),
        )).toBe(1);
    });
});
