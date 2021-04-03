import { isTruthy } from '../isTruthy';

describe('isTruthy', () => {
    it('should return false for undefined', () => {
        expect(isTruthy(undefined)).toBe(false);
    });

    it('should return false for null', () => {
        expect(isTruthy(null)).toBe(false);
    });

    it('should return false for false', () => {
        expect(isTruthy(false)).toBe(false);
    });

    it('should return false for 0', () => {
        expect(isTruthy(0)).toBe(false);
    });

    it('should return false for empty string', () => {
        expect(isTruthy('')).toBe(false);
    });

    it('should return true for empty array', () => {
        expect(isTruthy([])).toBe(true);
    });

    it('should return true for empty object', () => {
        expect(isTruthy({})).toBe(true);
    });

    it('should return true for true', () => {
        expect(isTruthy(true)).toBe(true);
    });

    it('should return true for number', () => {
        expect(isTruthy(1)).toBe(true);
    });

    it('should return true for string', () => {
        expect(isTruthy('a')).toBe(true);
    });
});
