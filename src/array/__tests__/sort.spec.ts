import { sort } from '../sort';

describe('sort', () => {
    it('should sort the array alphabetically by defaul', () => {
        expect(sort()(['b', 'c', 'a'])).toEqual(['a', 'b', 'c']);
    });

    it('should sort the array with sort function', () => {
        expect(sort<number>((a, b) => b - a)([1, 2, 3])).toEqual([3, 2, 1]);
    });
});
