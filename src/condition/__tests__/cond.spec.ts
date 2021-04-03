import { cond } from '../cond';

describe('cond', () => {
    it('should return the result of 1st branch for true', () => {
        expect(cond(true)(() => 1)(() => 2)).toBe(1);
    });

    it('should return the result of 2nd branch for false', () => {
        expect(cond(false)(() => 1)(() => 2)).toBe(2);
    });
});
