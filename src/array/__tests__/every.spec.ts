import { every } from '../every';

describe('every', () => {
    it('should return true for empty array', () => {
        expect(every(() => true)([]));
    });

    it('should return true if all items match the predicate', () => {
        expect(every((n) => typeof n === 'number')([1, 2, 3, 4, 5])).toBe(true);
    });

    it('should return false if one item does not match the predicate', () => {
        expect(every((n) => typeof n === 'number')([1, 2, '3', 4, 5])).toBe(false);
    });
});
