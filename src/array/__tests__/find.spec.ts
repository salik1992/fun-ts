import { find } from '../find';

describe('find', () => {
    it('should return the first item that matches the predicate', () => {
        expect(find((n: number) => n > 2)([1, 2, 3, 4, 5])).toBe(3);
    });

    it('should return undefined if nothing matches the predicate', () => {
        expect(find((n: number) => n > 5)([1, 2, 3, 4, 5])).toBe(undefined);
    });
});
