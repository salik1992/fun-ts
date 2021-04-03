import { subtract } from '../subtract';

describe('subtract', () => {
    it('should subtract 2nd number from the 1st number', () => {
        expect(subtract(2)(6)).toBe(4);
    });

    it('should subtract any two numbers', () => {
        const a = Math.round(Math.random() * 100);
        const b = Math.round(Math.random() * 100);
        expect(subtract(a)(b)).toBe(b - a);
    });
});
