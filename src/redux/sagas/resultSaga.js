import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

// generator function will be fired when "FETCH_RESULTS" actions reach worker Saga below
function* fetchResults(action) {
//sending axios GET request to /calc
  try {
    //declaring GET request to /calc as variable for use in Reducer dispatch
    const response = yield axios.get(`/calc`);
    //sending to resultsReducer the results of GET request as response.data
    yield put({type: 'RESULT_REDUCER', payload: response.data});
  } catch (error) {
    console.log("Results GET failed", error);
  }
}

// worker Saga will be fired on "FETCH_RESULTS" actions
function* resultSaga() {
  yield takeLatest("FETCH_RESULTS", fetchResults);
}

//exporting resultSaga
export default resultSaga;
