import { func } from "prop-types";
import React, { useState, useEffect } from "react";

function intialCount() {
  //.....
  return 100;
}

function DynamicInitialCount({ initialCount }) {
  //const [count, setCount] = useState(() => initialCount + 10);
  const [count, setCount] = useState(intialCount);

  //   useEffect(() => {
  //     // Effect that runs when initialCount changes
  //     setCount(initialCount);
  //   }, [initialCount]);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default DynamicInitialCount;
