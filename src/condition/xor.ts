import { reduce } from '../array';
import { cond } from './cond';

enum State {
    NONE, ONE, MORE,
}

export const xor = (...conditions: boolean[]) => (
    cond(reduce((acc: State, condition: boolean) => (
        cond(acc === State.MORE)(() => State.MORE)(() => (
            cond(condition)(() => State.ONE)(() => State.NONE)
        ))
    ))(State.NONE)(conditions) === State.ONE)(() => true)(() => false)
);
