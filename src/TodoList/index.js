import React from "react";

import { View, Text, Button } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as TodosActions from "../store/actions/todos";

// import styles from './styles';

const TodoList = ({ todos, addTodo, MarkAsCompleted }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    {todos.map((todo, index) => (
      <Text
        onPress={() => MarkAsCompleted(todo.id)}
        style={{ textDecorationLine: todo.completed ? "line-through" : "none" }}
        key={index}
      >
        {todo.text}
      </Text>
    ))}
    <Button onPress={addTodo} title="Add Todo" />
  </View>
);

const mapStateToProps = state => ({
  todos: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
