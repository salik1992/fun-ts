import { condition } from './condition';
import { second } from './second';

export const and = (x: Function) => (y: Function) => condition(y)(second)(x);
