import React from "react";
import useCustomHook from "./useCustomHook";

function MyComponent() {
  // Use the custom hook in your component
  const { value, setValue } = useCustomHook("initialValue");

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => setValue("new value")}>Set New Value</button>
    </div>
  );
}

export default MyComponent;
