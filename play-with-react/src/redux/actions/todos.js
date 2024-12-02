// action creator(s)

export function addNewTodo(todo) {
  return { type: "ADD_NEW_TODO", todo };
}

export function deleteTodo(id) {
  return { type: "DELETE_TODO", id };
}

export function clearCompleted() {
  return { type: "CLEAR_COMPLETED" };
}

export function loadTodosAsync() {
  // const todos = [
  //   { id: 1, title: "todo-1", completed: false },
  //   { id: 2, title: "todo-2", completed: true },
  //   { id: 3, title: "todo-2", completed: false },
  // ];
  // return { type: "LOAD_TODOS_SUCCESS", todos }; // Sync Action

  // HTTP-client  choices: XHR Api | Fetch Api | Axios lib

  return function (dispatch) {
    dispatch({ type: "REQUEST_BEGIN", message: "loading todos" });
    const promise = fetch("http://localhost:8080/api/v1/todos");
    promise
      .then((response) => response.json())
      .then((todos) => {
        dispatch({ type: "REQUEST_FINISHED" });
        dispatch({ type: "LOAD_TODOS_SUCCESS", todos }); // Async Action
      })
      .catch((err) => {
        dispatch({ type: "REQUEST_FAILED", message: err.message });
      });
  };
}

export function addNewTodoAsync(title) {
  return function (dispatch) {
    fetch("http://localhost:8080/api/v1/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    })
      .then((response) => response.json())
      .then((todo) => {
        dispatch(addNewTodo(todo));
      });
  };
}
