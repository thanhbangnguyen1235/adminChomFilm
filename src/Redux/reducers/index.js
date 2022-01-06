import { combineReducers } from "redux";
import filmProducers from "./filmProducers";
import userProducers from "./userProducers";

const rootReducers = combineReducers({
    film: filmProducers,
    user: userProducers,
})

export default rootReducers;