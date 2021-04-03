import { toString } from '../../string/toString';
import { pipe } from '../pipe';

describe('pipe', () => {
    it('should just call one function', () => {
        const piped = pipe(Math.max);
        expect(piped(1, 2, 3)).toBe(3);
    });

    it('should compose multiple functions into one and call them from the right', () => {
        const doubleNumber = (n: number) => n * 2;
        const doubleString = (s: string) => s + s;
        const piped = pipe(doubleNumber, toString, doubleString);
        expect(piped(2)).toBe('44');
    });
});
