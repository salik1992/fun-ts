import { forEach } from '../forEach';

describe('forEach', () => {
    it('should not call the eachFunction for empty arrays', () => {
        const spy = jest.fn();
        forEach(spy)([]);
        expect(spy).not.toHaveBeenCalled();
    });

    it('should call the eachFunction for each item of the array', () => {
        const spy = jest.fn();
        const array = [1, 2, 3];
        forEach(spy)(array);
        expect(spy).toHaveBeenNthCalledWith(1, 1, 0, array);
        expect(spy).toHaveBeenNthCalledWith(2, 2, 1, array);
        expect(spy).toHaveBeenNthCalledWith(3, 3, 2, array);
    });
});
