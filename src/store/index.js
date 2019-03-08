import { createStore, compose } from "redux";

import todos from "./reducers/todos";

const createAppropriateStore = __DEV__ ? console.tron.createEnhancer : () => {};

const store = createStore(todos, compose(createAppropriateStore()));

export default store;
