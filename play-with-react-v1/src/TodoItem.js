import React, { useContext } from "react";
import { TodoAppProvider } from "./TodoApp";

export const TodoItem = ({ todo }) => {
  const { deleteTodo } = useContext(TodoAppProvider);
  return (
    <>
      <li className="d-flex justify-content-around">
        <input type="checkbox" checked={todo.completed} />
        <div>{todo.title}</div>
        <button
          onClick={(e) => deleteTodo(todo.id)}
          className="btn btn-sm btn-danger"
        >
          delete
        </button>
      </li>
    </>
  );
};
