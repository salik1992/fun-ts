import { reduceRight } from '../reduceRight';

describe('reduce', () => {
    it('should reduce empty array into the initial value', () => {
        expect(reduceRight((acc: number, n: number) => n * acc)(1)([])).toBe(1);
    });

    it('should reduce all items from right', () => {
        expect(reduceRight((acc: string, s: string) => acc + s)('')(['a', 'b', 'c'])).toBe('cba');
    });
});
