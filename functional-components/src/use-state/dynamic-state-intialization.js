import React, { useState, useEffect } from "react";

function DynamicInitialCount({ initialCount }) {
  const [count, setCount] = useState(() => initialCount);

  useEffect(() => {
    // Effect that runs when initialCount changes
    setCount(initialCount);
  }, [initialCount]);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
