import { and } from './and';
import { isDefined } from './isDefined';
import { isNotNull } from './isNotNull';

export const isNotNullNorUndefined = <T>(value: T | undefined | null): value is T => and(
    isNotNull(value),
    isDefined(value),
);
