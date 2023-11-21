import React, { useEffect, useMemo } from "react";

function EffectWithMemoizedData({ data }) {
  // Memoize the data for use in useEffect
  const memoizedData = useMemo(() => {
    return processDataForEffect(data);
  }, [data]);

  useEffect(() => {
    // Use the memoizedData in the useEffect dependency array
    fetchDataBasedOnMemoizedData(memoizedData);
  }, [memoizedData]);

  return <div>{/* Component content */}</div>;
}

export default EffectWithMemoizedData;
