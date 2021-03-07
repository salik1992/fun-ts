import { map } from './map';

export const reverse = <T>(array: T[]) => map((_, index) => array[array.length - 1 - index]);
