import { sum } from '../sum';

describe('sum', () => {
    it('should return 0 for empty array', () => {
        expect(sum([])).toBe(0);
    });

    it('should return the sum of all items', () => {
        expect(sum([1, 2, 3, 4, 5])).toBe(15);
    });
});
