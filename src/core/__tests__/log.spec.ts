import { log } from '../log';

describe('log', () => {
    let spy: jest.SpyInstance;

    beforeAll(() => {
        spy = jest.spyOn(console, 'log');
        spy.mockImplementation(() => {});
    });

    beforeEach(() => {
        spy.mockReset();
    });

    afterAll(() => {
        spy.mockRestore();
    });

    it('should call console.log with message and content', () => {
        log('test message:')('value');
        expect(spy).toHaveBeenCalledWith('test message:', 'value');
    });

    it('should pass through the logged value', () => {
        const loggedObject = { x: 1 };
        expect(log('test:')(loggedObject)).toBe(loggedObject);
    });
});
