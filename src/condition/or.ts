import { condition } from './condition';
import { first } from './first';

export const or = (x: Function) => (y: Function) => condition(first)(x)(y);
