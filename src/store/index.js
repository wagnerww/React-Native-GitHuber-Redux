import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./ducks";
import rootSaga from "./sagas";

const createAppropriateStore = __DEV__ ? console.tron.createEnhancer : () => {};

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    createAppropriateStore()
  )
);

sagaMiddleware.run(rootSaga);

if (__DEV__) console.tron.log(store.getState());

export default store;
