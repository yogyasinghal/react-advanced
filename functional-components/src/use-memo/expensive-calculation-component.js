import React, { useState, useMemo } from "react";

function ExpensiveCalculationComponent({ data }) {
  // Memoize the result of the expensive calculation
  const result = useMemo(() => {
    // Perform the expensive calculation using the data
    return performExpensiveCalculation(data);
  }, [data]);

  //   const memoizedResult = useMemo(() => {
  //     // computation logic
  //   }, [dependency1, dependency2]);

  return <div>{result}</div>;
}

export default ExpensiveCalculationComponent;
