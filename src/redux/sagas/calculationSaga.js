import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

// worker Saga: will be fired on "POST_CALCULATION" actions
function* postCalculation(action) {
  console.log('in postCalculation saga', action.payload);
  try {
    yield axios.post(`/calc`, action.payload);
  } catch (error) {
    console.log('Calculation POST failed', error);
  }
}

function* calculationSaga() {
  yield takeLatest("POST_CALCULATION", postCalculation);
}

export default calculationSaga;
