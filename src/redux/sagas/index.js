import { all } from "redux-saga/effects";
import calculationSaga from "./calculationSaga";


// rootSaga is the primary saga.
// If there were multiples sagas in use in this project, it would bundle up 
//all of the other sagas so the project can use them. 
// This is imported into index.js as rootSaga


export default function* rootSaga() {
  yield all([
    calculationSaga(),
  ]);
}
