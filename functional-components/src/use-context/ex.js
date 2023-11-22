import React, {
  useState,
  useReducer,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useDebugValue,
  useContext,
  createContext,
} from "react";
import ReactDOM from "react-dom/client";

const DashboardContext = createContext(undefined);

function Menu({}) {
  const user = useContext(DashboardContext);
  let { subscribed } = user;
  if (subscribed) return <div className="card card-body">Menu</div>;
  else return null;
}
function Sidebar({}) {
  return (
    <div className="card card-body">
      Sidebar
      <Menu />
    </div>
  );
}
function UserProfile() {
  const user = useContext(DashboardContext);
  return <div className="card card-body">UserProfile Name : {user.name}</div>;
}
function Dashboard() {
  const [user, setUser] = useState({
    name: "Foo",
    subscribed: true,
  });
  return (
    <div className="card card-body">
      Dashboard
      <div className="d-flex">
        <DashboardContext.Provider value={user}>
          <Sidebar />
          <UserProfile />
        </DashboardContext.Provider>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <div className="display-6">functional components</div>
      <hr />
      <Dashboard />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
