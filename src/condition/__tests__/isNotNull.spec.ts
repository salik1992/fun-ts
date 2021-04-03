import { isNotNull } from '../isNotNull';

describe('isNotNull', () => {
    it('should return true for undefined', () => {
        expect(isNotNull(undefined)).toBe(true);
    });

    it('should return false for null', () => {
        expect(isNotNull(null)).toBe(false);
    });

    it('should return true for false', () => {
        expect(isNotNull(false)).toBe(true);
    });

    it('should return true for 0', () => {
        expect(isNotNull(0)).toBe(true);
    });

    it('should return true for empty string', () => {
        expect(isNotNull('')).toBe(true);
    });
});
