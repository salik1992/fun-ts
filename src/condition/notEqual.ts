import { condition } from './condition';
import { not } from './not';

export const notEqual = (x: Function) => (y: Function) => condition(not(y))(y)(x);
