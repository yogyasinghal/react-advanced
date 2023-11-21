import React, { useState } from "react";

function DynamicCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleSetCount = (value) => {
    setCount(parseInt(value, 10) || 0);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <input
        type="text"
        value={count}
        placeholder="Set Count"
        onChange={(e) => handleSetCount(e.target.value)}
      />
    </div>
  );
}

export default DynamicCounter;
