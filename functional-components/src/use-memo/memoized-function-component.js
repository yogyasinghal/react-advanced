import React, { useMemo } from "react";

function MemoizedFunction({ data }) {
  // Memoize a function based on the data
  const processFunction = useMemo(() => {
    return () => processData(data);
  }, [data]);

  return <div>{processFunction()}</div>;
}
