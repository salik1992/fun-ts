import { filter } from '../filter';

describe('filter', () => {
    it('should return empty array for empty array', () => {
        expect(filter(() => true)([])).toEqual([]);
    });

    it('should return empty array if nothing mathes', () => {
        expect(filter(() => false)([1, 2, 3, 4, 5])).toEqual([]);
    });

    it('should return array filtered by predicate', () => {
        const isEven = (n: number) => n % 2 === 0;
        expect(filter(isEven)([1, 2, 3, 4, 5])).toEqual([2, 4]);
    });
});
