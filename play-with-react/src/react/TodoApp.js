import React, { useEffect } from "react";
import { TodoFooter } from "./TodoFooter";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

import * as actions from "../redux/actions/todos";
import { useDispatch } from "react-redux";

export const TodoApp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    let action = actions.loadTodosAsync();
    dispatch(action);
  }, []);
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
