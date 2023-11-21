import React, { useState } from "react";

function Incrementer() {
  const [count, setCount] = useState(0);

  const incrementTwice = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementTwice}>Increment Tx`wice</button>
    </div>
  );
}

export default Incrementer;
