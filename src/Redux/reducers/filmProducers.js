import * as types from '../actionTypes';

const initalState = {
    film: [],
    detail: {}
}

const filmProducers = (state = initalState, action) => {
    switch (action.type) {
        case types.GETALLFILM:
            return {
                ...state,
                film: action.payload
            }
        case types.GETDETAIL:
            return {
                ...state,
                detail: action.payload,
            }
        default:
            return state;
    }
}

export default filmProducers;