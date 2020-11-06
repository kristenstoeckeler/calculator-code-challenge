import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

// generator function will be fired when "POST_CALCULATION" actions reach worker Saga below
function* postCalculation(action) {
  try {
    //sending axios POST request to /calc with payload
    yield axios.post(`/calc`, action.payload);
    //dispatching to resultSaga to trigger GET request again with updated data from POST
    yield put ({type: 'FETCH_RESULTS'});
  } catch (error) {
    console.log('Calculation POST failed', error);
  }
}

// worker Saga will be fired on "POST_CALCULATION" actions
function* calculationSaga() {
  yield takeLatest("POST_CALCULATION", postCalculation);
}

//exporting calculationSaga
export default calculationSaga;
