import React, { useReducer } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const nameReducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return action.payload;
    default:
      return state;
  }
};

function MultipleReducersComponent() {
  const [count, dispatchCount] = useReducer(countReducer, 0);
  const [name, dispatchName] = useReducer(nameReducer, "John");

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatchCount({ type: "increment" })}>
        Increment
      </button>
      <button onClick={() => dispatchCount({ type: "decrement" })}>
        Decrement
      </button>

      <p>Name: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) =>
          dispatchName({ type: "setName", payload: e.target.value })
        }
      />
    </div>
  );
}

export default MultipleReducersComponent;
