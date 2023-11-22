import React, { useContext, useMemo } from "react";
import { TodoAppProvider } from "./TodoApp";

export const TodoFooter = ({}) => {
  const { todos, clearCompleted } = useContext(TodoAppProvider);
  const todosLeftCount = useMemo(() => {
    return todos.reduce((acc, todo) => {
      if (!todo.completed) return acc + 1;
      else return acc;
    }, 0);
  }, [todos]);
  return (
    <div className="card card-body">
      <div className="d-flex justify-content-between">
        <span>{todosLeftCount} left</span>
        <button onClick={(e) => clearCompleted()} className="btn btn-dark">
          clear completed
        </button>
      </div>
    </div>
  );
};
