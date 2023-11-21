import React, { useEffect, useRef } from "react";

function MountedStatusComponent() {
  const isMounted = useRef(true);

  useEffect(() => {
    // Set to false when the component is unmounted
    return () => {
      isMounted.current = false;
    };
  }, []);

  const fetchData = () => {
    // Check if the component is still mounted before updating state
    if (isMounted.current) {
      // Perform data fetching and state update
      // ...
    }
  };

  return (
    <div>
      <p>Component Status: {isMounted.current ? "Mounted" : "Unmounted"}</p>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}
