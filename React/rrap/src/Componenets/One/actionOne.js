import * as actions from './actionTypeOne';

export const onDecrement = val => {
    return {
        type: actions.DECREMENT,
        payload: val
    }
}