import React, { useState } from "react";

function Counter() {
  console.log("render()");
  const [count, setCount] = useState(0);

  const increment = () => {
    // Using functional update to ensure the latest state
    //setCount((prevCount) => prevCount + 1);
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + 1); //
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
