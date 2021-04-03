import { multiply } from '../multiply';

describe('multiply', () => {
    it('should multiply two numbers', () => {
        expect(multiply(3)(2)).toBe(6);
    });

    it('should multiply any two numbers', () => {
        const a = Math.round(Math.random() * 100);
        const b = Math.round(Math.random() * 100);
        expect(multiply(a)(b)).toBe(a * b);
    });
});
