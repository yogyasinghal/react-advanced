import React, { useState } from "react";

function MultiState() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default MultiState;
