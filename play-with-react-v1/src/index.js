import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import store from "./redux/store";
import { Provider } from "react-redux";

import App from "./react/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
