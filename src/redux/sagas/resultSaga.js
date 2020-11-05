import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

// worker Saga: will be fired on "POST_CALCULATION" actions
function* fetchResults(action) {
  console.log("in fetchResults saga");
  try {
    yield axios.get(`/calc`);
    console.log('here is response.data');
    yield put({type: 'RESULTS_REDUCER'});
  } catch (error) {
    console.log("Results GET failed", error);
  }
}

function* resultSaga() {
  yield takeLatest("FETCH_RESULTS", fetchResults);
}

export default resultSaga;
