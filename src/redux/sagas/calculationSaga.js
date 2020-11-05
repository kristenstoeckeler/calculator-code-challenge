import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "POST_CALCULATION" actions
function* postCalculation(action) {
  try {
    //axios.post goes here
  } catch (error) {
    //log the catch
  }
}

function* calculationSaga(action) {
  yield takeLatest("POST_CALCULATION", postCalculation);
}

export default calculationSaga;
