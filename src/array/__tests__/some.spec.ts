import { some } from '../some';

describe('some', () => {
    it('should return true for empty array', () => {
        expect(some(() => true)([]));
    });

    it('should return false if no items match the predicate', () => {
        expect(some((n) => typeof n === 'string')([1, 2, 3, 4, 5])).toBe(false);
    });

    it('should return true if at least one item matches the predicate', () => {
        expect(some((n) => typeof n === 'string')([1, 2, '3', 4, 5])).toBe(true);
    });
});
