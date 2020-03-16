import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import combinedReducers from './reducers';
import rootSaga from './sagas';

// Apply Saga
const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);

// Redux store
const store = createStore(combinedReducers, enhancer);
sagaMiddleware.run(rootSaga);

export default store;
