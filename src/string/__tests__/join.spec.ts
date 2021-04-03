import { join } from '../join';

describe('join', () => {
    it('should return empty string for empty array', () => {
        expect(join(', ')([])).toBe('');
    });

    it('should join all items with a separator', () => {
        expect(join(' :: ')(['a', 'b', 'c', 'd', 'e'])).toBe('a :: b :: c :: d :: e');
    });
});
