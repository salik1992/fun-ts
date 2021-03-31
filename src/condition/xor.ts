import { reduce } from '../array';
import { cond } from './cond';

enum State {
    NONE, ONE, MORE,
}

export const xor = (...conditions: boolean[]) => (
    reduce((state: State, condition: boolean) => (
        cond(state === State.MORE)(() => State.MORE)(() => (
            cond(condition)(
                () => cond(state === State.NONE)(
                    () => State.ONE,
                )(
                    () => State.MORE,
                ),
            )(
                () => state,
            )
        ))
    ))(State.NONE)(conditions) === State.ONE
);
