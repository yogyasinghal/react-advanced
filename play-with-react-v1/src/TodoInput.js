import React, { useCallback, useContext } from "react";
import { TodoAppProvider } from "./TodoApp";

export const TodoInput = () => {
  const { addTodo } = useContext(TodoAppProvider);
  const handleKeyup = useCallback((e) => {
    if (e.which !== 13) return;
    let title = e.target.value;
    addTodo(title);
    e.target.value = "";
  });
  return (
    <div className="card card-body">
      <input className="form-control" onKeyUp={handleKeyup} />
    </div>
  );
};
