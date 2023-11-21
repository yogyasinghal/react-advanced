import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Using functional update to ensure the latest state
    //setCount((prevCount) => prevCount + 1);
    for (let i = 0; i < 5; i++) {
      //setCount(count + 1);
      setCount((prevCount) => prevCount + 1);
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
