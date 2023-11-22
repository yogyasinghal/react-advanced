export function addNewTodo(title) {
  return { type: "ADD_NEW_TODO", title };
}

export function deleteTodo(id) {
  return { type: "DELETE_TODO", id };
}

export function clearCompleted() {
  return { type: "CLEAR_COMPLETED" };
}
