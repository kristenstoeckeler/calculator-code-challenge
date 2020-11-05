import { combineReducers } from "redux";
import calculations from "./calculationReducer";


// rootReducer is the primary reducer for this project
// If there were going to be multiple reducers for the project, it bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// This makes a bigger object for the store, with the objects from all the reducers.

const rootReducer = combineReducers({
    calculations
});

export default rootReducer;
