import { isNotNullNorUndefined } from '../isNotNullNorUndefined';

describe('isDefined', () => {
    it('should return false for undefined', () => {
        expect(isNotNullNorUndefined(undefined)).toBe(false);
    });

    it('should return true for null', () => {
        expect(isNotNullNorUndefined(null)).toBe(false);
    });

    it('should return true for false', () => {
        expect(isNotNullNorUndefined(false)).toBe(true);
    });

    it('should return true for 0', () => {
        expect(isNotNullNorUndefined(0)).toBe(true);
    });

    it('should return true for empty string', () => {
        expect(isNotNullNorUndefined('')).toBe(true);
    });
});
