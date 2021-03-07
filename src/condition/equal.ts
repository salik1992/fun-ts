import { condition } from './condition';
import { not } from './not';

export const equal = (x: Function) => (y: Function) => condition(y)(not(y))(x);
