export function todosReducer(todos = [], action) {
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
