import { split } from '../split';

describe('split', () => {
    it('should return array with 1 empty string for an empty string', () => {
        expect(split(', ')('')).toEqual(['']);
    });

    it('should return the original string in array if separator not found', () => {
        expect(split(' :: ')('a, b, c, d, e')).toEqual(['a, b, c, d, e']);
    });

    it('should return strings in array separated by separator', () => {
        expect(split(', ')('a, b, c, d, e')).toEqual(['a', 'b', 'c', 'd', 'e']);
    });
});
