import { divide } from '../divide';

describe('divide', () => {
    it('should divide 2nd number by the 1st number', () => {
        expect(divide(2)(6)).toBe(3);
    });

    it('should divide any two numbers', () => {
        const a = Math.round(Math.random() * 100);
        const b = Math.round(Math.random() * 100);
        expect(divide(a)(b)).toBe(b / a);
    });
});
