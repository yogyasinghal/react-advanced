import React, { useState, useEffect } from "react";

function CleanupEffectComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchDataFromAPI();
      setData(result);
    };

    fetchData();

    // Cleanup function
    return () => {
      // Perform cleanup, e.g., unsubscribe from a subscription
      console.log("Component will unmount or effect will re-run");
    };
  }, []); // Run once after initial render

  return <div>{data && <p>Data: {data}</p>}</div>;
}

export default CleanupEffectComponent;
