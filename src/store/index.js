import { createStore, compose } from "redux";

import reducer from "./reducers";

const createAppropriateStore = __DEV__ ? console.tron.createEnhancer : () => {};

const store = createStore(reducer, compose(createAppropriateStore()));

if (__DEV__) console.tron.log(store.getState());

export default store;
