import { modulo } from '../modulo';

describe('modulo', () => {
    it('should return modulo of 2nd number divided by 1st', () => {
        expect(modulo(7)(10)).toBe(3);
    });

    it('should modulo any 2 numbers', () => {
        const a = Math.round(Math.random() * 100);
        const b = Math.round(Math.random() * 100);
        expect(modulo(a)(b)).toBe(b % a);
    });
});
