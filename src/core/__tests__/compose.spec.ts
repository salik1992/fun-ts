import { toString } from '../../string/toString';
import { compose } from '../compose';

describe('compose', () => {
    it('should just call one function', () => {
        const composed = compose(Math.max);
        expect(composed(1, 2, 3)).toBe(3);
    });

    it('should compose multiple functions into one and call them from the right', () => {
        const doubleNumber = (n: number) => n * 2;
        const doubleString = (s: string) => s + s;
        const composed = compose(doubleString, toString, doubleNumber);
        expect(composed(2)).toBe('44');
    });
});
