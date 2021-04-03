import { not } from '../not';

describe('not', () => {
    it('should return false for true', () => {
        expect(not(true)).toBe(false);
    });

    it('should return true for false', () => {
        expect(not(false)).toBe(true);
    });
});
