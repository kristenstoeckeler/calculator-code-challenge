import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

// worker Saga: will be fired on "POST_CALCULATION" actions
function* fetchResults(action) {
  console.log("in fetchResults saga");
  try {
    const response = yield axios.get(`/calc`);
    console.log('here is response.data', response.data);
    yield put({type: 'RESULT_REDUCER', payload: response.data});
  } catch (error) {
    console.log("Results GET failed", error);
  }
}

function* resultSaga() {
  yield takeLatest("FETCH_RESULTS", fetchResults);
}

export default resultSaga;
