import React, { useState } from "react";
// import {JSX} from "react";
// import { Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, { id: Math.random().toString(), text: text }]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((val) => val.id !== todoId);
    });
  };

  // const App: JSX.Element = () => {
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
