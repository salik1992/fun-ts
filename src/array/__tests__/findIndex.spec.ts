import { findIndex } from '../findIndex';

describe('findIndex', () => {
    it('should return the index of the first item that matches the predicate', () => {
        expect(findIndex((n: number) => n > 2)([1, 2, 3, 4, 5])).toBe(2);
    });

    it('should return -1 if nothing matches the predicate', () => {
        expect(findIndex((n: number) => n > 5)([1, 2, 3, 4, 5])).toBe(-1);
    });
});
