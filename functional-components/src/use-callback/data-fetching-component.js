import React, { useState, useEffect, useCallback } from "react";

function DataFetchingComponent({ fetchData }) {
  const [data, setData] = useState(null);

  // Memoize the fetchData function using useCallback
  const fetchCallback = useCallback(() => {
    fetchData()
      .then((result) => setData(result))
      .catch((error) => console.error(error));
  }, [fetchData]);

  useEffect(() => {
    // Use the memoized function in the useEffect dependency array
    fetchCallback();
  }, [fetchCallback]);

  return <div>{data && <p>Data: {data}</p>}</div>;
}

export default DataFetchingComponent;
