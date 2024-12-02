import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Counter } from "./app/features/counter/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
