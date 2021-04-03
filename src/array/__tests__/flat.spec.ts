import { flat } from '../flat';

describe('flat', () => {
    it('should return empty array for empty array', () => {
        expect(flat([])).toEqual([]);
    });

    it('should return the equal array for flat array', () => {
        expect(flat([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('should flatten the array by 1 level', () => {
        expect(flat([1, [2], [[3]]])).toEqual([1, 2, [3]]);
    });
});
