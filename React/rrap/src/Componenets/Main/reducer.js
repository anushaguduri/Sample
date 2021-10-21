import * as actions from './actionType';

const initState = {
    counter: 0,
    employeeData: [{
        firstName: 'alex',
        age: 20
    },{
        firstName: 'alina',
        age: 22
    }]
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.INCREMENT:
            return { ...state, counter: state.counter + action.payload }
        default:
            return state;
    }
}

export default reducer;