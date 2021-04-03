import { toString } from '../toString';

describe('toString', () => {
    it('should stringify string', () => {
        expect(toString('a')).toBe('a');
    });

    it('should stringify number', () => {
        expect(toString(1)).toBe('1');
    });

    it('should stringify boolean', () => {
        expect(toString(true)).toBe('true');
    });

    it('should stringify array of numbers', () => {
        expect(toString([1, 2])).toBe('1,2');
    });

    it('should stringify array of strings', () => {
        expect(toString(['1', '2'])).toBe('1,2');
    });
});
