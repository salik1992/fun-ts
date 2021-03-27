import { some } from '../array/some';

export const or = (...conditions: boolean[]) => (
    some((condition: boolean) => condition)(conditions)
);
