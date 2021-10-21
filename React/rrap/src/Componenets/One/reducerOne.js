import * as actions from './actionTypeOne';

const initState = {
    counter: 20
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.DECREMENT:
            return { ...state, counter: state.counter + action.payload }
        default:
            return state;
    }
}

export default reducer;