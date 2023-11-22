import React from "react";
import { TodoFooter } from "./TodoFooter";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  return (
    <div className="card">
      <div className="card-header">Todo App</div>
      <div className="card-body">
        <TodoInput />
        <TodoList />
        <TodoFooter />
      </div>
    </div>
  );
};
