import { isFalsy } from '../isFalsy';

describe('isFalsy', () => {
    it('should return true for undefined', () => {
        expect(isFalsy(undefined)).toBe(true);
    });

    it('should return true for null', () => {
        expect(isFalsy(null)).toBe(true);
    });

    it('should return true for false', () => {
        expect(isFalsy(false)).toBe(true);
    });

    it('should return true for 0', () => {
        expect(isFalsy(0)).toBe(true);
    });

    it('should return true for empty string', () => {
        expect(isFalsy('')).toBe(true);
    });

    it('should return false for empty array', () => {
        expect(isFalsy([])).toBe(false);
    });

    it('should return false for empty object', () => {
        expect(isFalsy({})).toBe(false);
    });

    it('should return false for true', () => {
        expect(isFalsy(true)).toBe(false);
    });

    it('should return false for number', () => {
        expect(isFalsy(1)).toBe(false);
    });

    it('should return false for string', () => {
        expect(isFalsy('a')).toBe(false);
    });
});
