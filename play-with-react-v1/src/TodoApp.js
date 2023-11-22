import React, { useReducer, useCallback, createContext } from "react";
import { TodoFooter } from "./TodoFooter";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

function todosReducer(todos, action) {
  let { type } = action;
  switch (type) {
    case "ADD_NEW_TODO": {
      let { title } = action;
      let newTodo = { id: todos.length + 1, title, completed: false };
      return todos.concat(newTodo);
    }
    case "DELETE_TODO": {
      let { id } = action;
      return todos.filter((todo) => todo.id !== id);
    }
    case "CLEAR_COMPLETED": {
      return todos.filter((todo) => !todo.completed);
    }
    default:
      return todos;
  }
}

export const TodoAppProvider = createContext({});

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todosReducer, [
    { id: 1, title: "todo-1", completed: true },
    { id: 2, title: "todo-2", completed: true },
  ]);
  const deleteTodo = useCallback((id) => {
    dispatch({ type: "DELETE_TODO", id });
  }, []);
  const addTodo = useCallback((title) => {
    dispatch({ type: "ADD_NEW_TODO", title });
  }, []);
  const clearCompleted = useCallback((title) => {
    dispatch({ type: "CLEAR_COMPLETED" });
  }, []);
  const value = {
    todos,
    addTodo,
    deleteTodo,
    clearCompleted,
  };
  return (
    <div className="card">
      <div className="card-header">Todo App</div>
      <div className="card-body">
        <TodoAppProvider.Provider value={value}>
          <TodoInput />
          <TodoList />
          <TodoFooter />
        </TodoAppProvider.Provider>
      </div>
    </div>
  );
};
