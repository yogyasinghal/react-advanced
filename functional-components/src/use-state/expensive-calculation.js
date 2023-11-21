import React, { useState, useMemo } from "react";

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);

  const expensiveResult = useMemo(() => {
    // Expensive calculation based on count
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Result: {expensiveResult}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ExpensiveCalculation;
