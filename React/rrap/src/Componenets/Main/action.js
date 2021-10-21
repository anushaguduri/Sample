import * as actions from './actionType';

export const onIncrement = val => {
    return {
        type: actions.INCREMENT,
        payload: val
    }
}