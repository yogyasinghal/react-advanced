import React, { useRef, useEffect } from "react";

function IntervalComponent() {
  const intervalIdRef = useRef(null);

  useEffect(() => {
    // Start an interval when the component mounts
    intervalIdRef.current = setInterval(() => {
      console.log("Interval Tick");
    }, 1000);

    // Cleanup function to clear the interval on unmount
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);

  return <p>Component with interval</p>;
}

export default IntervalComponent;
