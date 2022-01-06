import * as types from '../actionTypes';

const initalState = {
    user: [],
}

const userProducers = (state = initalState, action) => {
    switch (action.type) {
        case types.GETALLUSER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default userProducers;