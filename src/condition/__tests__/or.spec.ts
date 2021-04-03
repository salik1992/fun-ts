import { or } from '../or';

describe('or', () => {
    it('should return true for true', () => {
        expect(or(true)).toBe(true);
    });

    it('should return false for false', () => {
        expect(or(false)).toBe(false);
    });

    it('should return true for true, false', () => {
        expect(or(true, false)).toBe(true);
    });

    it('should return true if at least one param is true', () => {
        expect(or(false, false, false, true, false, false)).toBe(true);
    });
});
