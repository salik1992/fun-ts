import { parseInt } from '../parseInt';

describe('parseInt', () => {
    it('should parseInt without radix', () => {
        expect(parseInt()('10')).toBe(10);
    });

    it('should parseInt with radix', () => {
        expect(parseInt(16)('A')).toBe(0xA);
    });
});
