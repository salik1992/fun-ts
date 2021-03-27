import { every } from '../array/every';

export const and = (...conditions: boolean[]) => (
    every((condition: boolean) => condition)(conditions)
);
