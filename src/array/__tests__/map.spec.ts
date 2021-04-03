import { map } from '../map';

describe('map', () => {
    it('should map empty array to an empty array', () => {
        expect(map(() => true)([])).toEqual([]);
    });

    it('should map one array into another', () => {
        const power = (n: number) => n * n;
        expect(map(power)([1, 2, 3, 4, 5])).toEqual([1, 4, 9, 16, 25]);
    });
});
