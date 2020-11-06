//importing combineReducers to gather reducers in rootReducer 
import { combineReducers } from "redux";

//importing resultReducer
import results from './resultReducer';

// If there were going to be multiple reducers for the project, it bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga at the root-level index.js
// This makes a bigger object for the store, with the objects from all the reducers.
const rootReducer = combineReducers({
    results
});

//exporting rootReducer
export default rootReducer;
