import { add } from '../add';

describe('add', () => {
    it('should add two numbers', () => {
        expect(add(1)(2)).toBe(3);
    });

    it('should add any two numbers', () => {
        const a = Math.round(Math.random() * 100);
        const b = Math.round(Math.random() * 100);
        expect(add(a)(b)).toBe(a + b);
    });
});
