import React, { useContext, useMemo } from "react";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import * as actions from "../redux/actions/todos";

export const TodoFooter = ({}) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
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
        <button
          onClick={(e) => dispatch(actions.clearCompleted())}
          className="btn btn-dark"
        >
          clear completed
        </button>
      </div>
    </div>
  );
};
