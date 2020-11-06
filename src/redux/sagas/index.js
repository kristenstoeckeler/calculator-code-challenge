//importing All to gather sagas in rootSaga 
import { all } from 'redux-saga/effects';

//importing calculationSaga
import calculationSaga from './calculationSaga';

//importing resultSaga
import resultSaga from './resultSaga';

// rootSaga generator function bundles up all of the other sagas
// and exports as one function, to be imported into index.js as rootSaga at the root-level index.js
export default function* rootSaga() {
  yield all([
    calculationSaga(),
    resultSaga(),
  ]);
}
