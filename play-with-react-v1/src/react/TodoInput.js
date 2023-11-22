import React, { useCallback, useContext } from "react";

import { useDispatch } from "react-redux";
import * as actions from "../redux/actions/todos";

export const TodoInput = () => {
  const dispatch = useDispatch();
  const handleKeyup = useCallback((e) => {
    if (e.which !== 13) return;
    let title = e.target.value;
    dispatch(actions.addNewTodo(title));
    e.target.value = "";
  });
  return (
    <div className="card card-body">
      <input className="form-control" onKeyUp={handleKeyup} />
    </div>
  );
};
