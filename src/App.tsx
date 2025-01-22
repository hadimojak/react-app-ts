import React from "react";
// import {JSX} from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  // const App: JSX.Element = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
};

export default App;
