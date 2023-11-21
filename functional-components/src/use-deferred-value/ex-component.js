import { useState, useDeferredValue } from "react";

function ExampleComponent() {
  const [value, setValue] = useState("");

  // Wrap the value in useDeferredValue
  const deferredValue = useDeferredValue(value);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Deferred Value: {deferredValue}</p>
    </div>
  );
}

export default ExampleComponent;
