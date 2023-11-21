import React, { useState, useEffect } from "react";

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array means the effect runs once after initial render

  return (
    <div>
      <p>Seconds: {seconds}</p>
    </div>
  );
}

export default TimerComponent;
