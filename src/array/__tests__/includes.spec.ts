import { includes } from '../includes';

describe('includes', () => {
    it('should find an item', () => {
        expect(includes(1)([0, 1, 2])).toBe(true);
    });

    it('should not find an item', () => {
        expect(includes(3)([0, 1, 2])).toBe(false);
    });
});
