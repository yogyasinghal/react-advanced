export function todosReducer(todos = [], action) {
  let { type } = action;
  switch (type) {
    case "ADD_NEW_TODO": {
      let { todo } = action;
      todos = todos.concat(todo);
      return todos;
    }
    case "DELETE_TODO": {
      let { id } = action;
      return todos.filter((todo) => todo.id !== id);
    }
    case "CLEAR_COMPLETED": {
      return todos.filter((todo) => !todo.completed);
    }
    case "LOAD_TODOS_SUCCESS": {
      let { todos } = action;
      return todos;
    }
    default:
      return todos;
  }
}
