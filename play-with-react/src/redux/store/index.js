import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import rootReducer from "../reducers";

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsDenylist, actionsCreators and other options if needed
});
const middleware = [thunk];
const store = createStore(
  rootReducer,
  { todos: [], requestStatus: {} },
  composeEnhancers(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

export default store;
