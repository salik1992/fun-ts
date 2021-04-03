import { reverse } from '../reverse';

describe('reverse', () => {
    it('should return empty array for empty array', () => {
        expect(reverse([])).toEqual([]);
    });

    it('should return reversed array and not modify the original', () => {
        const array = [1, 2, 3];
        expect(reverse(array)).toEqual([3, 2, 1]);
        expect(array).toEqual([1, 2, 3]);
    });
});
