import React, { useContext } from "react";
import { TodoItem } from "./TodoItem";

import { useSelector } from "react-redux";

export const TodoList = ({}) => {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="card card-body mt-3">
      <ul className="list-group">
        {todos.map((todo, index) => {
          return (
            <li className="list-group-item" key={todo.id}>
              <TodoItem todo={todo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
