import React, { useContext } from "react";

import { useDispatch } from "react-redux";
import * as actions from "../redux/actions/todos";
export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li className="d-flex justify-content-around">
        <input type="checkbox" checked={todo.completed} />
        <div>{todo.title}</div>
        <button
          onClick={(e) => dispatch(actions.deleteTodo(todo.id))}
          className="btn btn-sm btn-danger"
        >
          delete
        </button>
      </li>
    </>
  );
};
