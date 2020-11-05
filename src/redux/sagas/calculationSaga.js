import axios from "axios";
import { put, takeLatest, actionChannel } from "redux-saga/effects";

// worker Saga: will be fired on "POST_CALCULATION" actions
function* postCalculation(action) {
  console.log('in postCalculation saga', action.payload);
  
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
