import "./config/reactotron";
import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import { View } from "react-native";

import TodoList from "./TodoList";

// import styles from './styles';

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
