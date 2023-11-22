import React, { useContext } from "react";
import { TodoAppProvider } from "./TodoApp";
import { TodoItem } from "./TodoItem";

export const TodoList = ({}) => {
  const { todos = [] } = useContext(TodoAppProvider);
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
