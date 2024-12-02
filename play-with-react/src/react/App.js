import { TodoApp } from "./TodoApp";
import { RequestStatus } from "./RequestStatus";

function App() {
  return (
    <div className="container">
      <div className="display-6">play-with-react</div>
      <hr />
      <RequestStatus />
      <TodoApp />
    </div>
  );
}

export default App;
