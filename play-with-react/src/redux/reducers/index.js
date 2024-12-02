import { combineReducers } from "redux";
import { requestStatusReducer } from "./request-status";
import { todosReducer } from "./todos";

const rootReducer = combineReducers({
  todos: todosReducer, // slice
  requestStatus: requestStatusReducer, // slice
});

export default rootReducer;
