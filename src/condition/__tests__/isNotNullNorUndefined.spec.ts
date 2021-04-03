import { isDefined } from '../isDefined';

describe('isDefined', () => {
    it('should return false for undefined', () => {
        expect(isDefined(undefined)).toBe(false);
    });

    it('should return true for null', () => {
        expect(isDefined(null)).toBe(true);
    });

    it('should return true for false', () => {
        expect(isDefined(false)).toBe(true);
    });

    it('should return true for 0', () => {
        expect(isDefined(0)).toBe(true);
    });

    it('should return true for empty string', () => {
        expect(isDefined('')).toBe(true);
    });
});
