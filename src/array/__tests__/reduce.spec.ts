import { reduce } from '../reduce';

describe('reduce', () => {
    it('should reduce empty array into the initial value', () => {
        expect(reduce((acc: number, n: number) => n * acc)(1)([])).toBe(1);
    });

    it('should reduce all items from left', () => {
        expect(reduce((acc: string, s: string) => acc + s)('')(['a', 'b', 'c'])).toBe('abc');
    });
});
