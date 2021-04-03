import { product } from '../product';

describe('product', () => {
    it('should return 1 for empty arrays', () => {
        expect(product([])).toBe(1);
    });

    it('should return the product of all items', () => {
        expect(product([2, 3, 4, 5])).toBe(120);
    });
});
