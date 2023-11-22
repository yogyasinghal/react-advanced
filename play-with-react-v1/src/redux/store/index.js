import { createStore } from "redux";

import rootReducer from "../reducers";

const store = createStore(
  rootReducer,
  {
    todos: [
      { id: 1, title: "todo-1", completed: true },
      { id: 2, title: "todo-2", completed: true },
    ],
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
