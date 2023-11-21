import React, { useState, useTransition } from "react";

function AnimatedList({ items }) {
  const [index, setIndex] = useState(0);
  const [startTransition, isPending] = useTransition({
    timeoutMs: 3000, // Specify the duration of the transition
  });

  const nextItem = () => {
    startTransition(() => {
      setIndex((prevIndex) => prevIndex + 1);
    });
  };

  return (
    <div>
      <p>Current Item: {items[index]}</p>
      <button onClick={nextItem} disabled={isPending}>
        Next Item
      </button>
    </div>
  );
}

export default AnimatedList;
