import React, { useState, useEffect, useRef } from "react";

function PreviousStateComponent() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default PreviousStateComponent;
