import { and } from '../and';

describe('and', () => {
    it('should return true for true', () => {
        expect(and(true)).toBe(true);
    });

    it('should return false for false', () => {
        expect(and(false)).toBe(false);
    });

    it('should return true for true, true', () => {
        expect(and(true, true)).toBe(true);
    });

    it('should return false if any of the params is false', () => {
        expect(and(true, true, true, true, false, true)).toBe(false);
    });
});
