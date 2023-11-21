import React, { useState, useCallback } from "react";

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Define a callback function using useCallback
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // const memoizedFunction = useCallback(() => {
  //     // function logic
  //   }, [dependency1, dependency2]);

  return (
    <div>
      <p>Count: {count}</p>
      {/* Pass the callback function to a child component */}
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Increment Count</button>;
}

export default ParentComponent;

// Preventing Unnecessary Renders
function InputComponent({ onInputChange }) {
  const handleChange = useCallback(
    (e) => {
      onInputChange(e.target.value);
    },
    [onInputChange]
  );

  return <input type="text" onChange={handleChange} />;
}
