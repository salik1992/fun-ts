import { replace } from '../replace';

describe('replace', () => {
    it('should replace the string', () => {
        expect(replace('Lenny', 'Karl')('Hey, Lenny!')).toBe('Hey, Karl!');
    });
});
