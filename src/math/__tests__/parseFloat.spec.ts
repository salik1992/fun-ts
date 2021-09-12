import { parseFloat } from '../parseFloat';

describe('parseFloat', () => {
    it('should parseFloat', () => {
        expect(parseFloat('10.34')).toBe(10.34);
    });
});
