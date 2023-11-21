import React, { useMemo } from "react";

function MemoizedRendering({ data }) {
  // Memoize the JSX rendering based on the data
  const renderedContent = useMemo(() => {
    return (
      <div>
        <p>Data: {data}</p>
        {/* Additional JSX based on the data */}
      </div>
    );
  }, [data]);

  return <div>{renderedContent}</div>;
}

export default MemoizedRendering;
