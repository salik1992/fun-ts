import { xor } from '../xor';

describe('xor', () => {
    it('should return true for true', () => {
        expect(xor(true)).toBe(true);
    });

    it('should return false for false', () => {
        expect(xor(false)).toBe(false);
    });

    it('should return true for true, false', () => {
        expect(xor(true, false)).toBe(true);
    });

    it('should return true for false, true, false', () => {
        expect(xor(false, true, false)).toBe(true);
    });

    it('should return false for true, true, false', () => {
        expect(xor(true, true, false)).toBe(false);
    });

    it('should return true if exactly one param is true', () => {
        expect(xor(false, false, false, true, false, false)).toBe(true);
        expect(xor(false, false, true, true, false, false)).toBe(false);
    });
});
