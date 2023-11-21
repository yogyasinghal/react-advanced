import React, { useState, useEffect } from "react";

function RealTimeDataComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const subscription = subscribeToRealTimeData((realTimeData) => {
      setData(realTimeData);
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => {
      unsubscribeFromRealTimeData(subscription);
    };
  }, []); // Run once after initial render

  return (
    <div>
      {data && (
        <div>
          <h1>Real-Time Data:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
export default RealTimeDataComponent;
