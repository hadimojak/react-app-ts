import React from "react";
// import {JSX} from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "finished the course" }];
  // const App: JSX.Element = () => {
  return (
    <div className="App">
      {/* { component that add todos} */}
      <TodoList items={todos} />
    </div>
  );
};

export default App;
