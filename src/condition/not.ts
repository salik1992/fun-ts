import { condition } from './condition';
import { first } from './first';
import { second } from './second';

export const not = (x: Function) => condition(second)(first)(x);
