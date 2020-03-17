import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import combinedReducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(
  // Saga
  applyMiddleware(sagaMiddleware),
  // Devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// Redux store
const store = createStore(
  combinedReducers,
  enhancers,
);

sagaMiddleware.run(rootSaga);

export default store;
