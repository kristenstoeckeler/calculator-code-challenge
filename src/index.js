//importing React, 
import React from 'react';
import ReactDOM from 'react-dom';

//importing App components
import App from './components/App/App';

//imports from Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

//importing root reducer and saga
import rootReducer from './redux/reducers'; // imports ./redux/reducers/index.js
import rootSaga from './redux/sagas'; // imports ./redux/sagas/index.js

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

//importing styles file
import "./index.css";

//declaring instance of sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//determining when to use logger
const middlewareList =
  process.env.NODE_ENV === "development"
    ? [sagaMiddleware, logger]
    : [sagaMiddleware];

//creating store
const store = createStore(
  // tells the Saga middleware to use the rootReducer
  // rootSaga contains all Reducers
  rootReducer,
  // adds all middleware including Saga and Logger
  applyMiddleware(...middlewareList)
);

// tells the Saga middleware to use the rootSaga
// rootSaga contains all sagas
sagaMiddleware.run(rootSaga);

//sending store through Provider and rendering App
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


