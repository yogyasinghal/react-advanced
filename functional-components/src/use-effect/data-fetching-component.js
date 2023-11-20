import React, { useState, useEffect } from "react";

function fetchDataFromAPI() {
  return Promise.resolve("data");
}
function DataFetchingComponent() {
  const [data, setData] = useState(null);

  // useEffect is called after every render
  useEffect(() => {
    // Side effect code here
    fetchDataFromAPI()
      .then((result) => setData(result))
      .catch((error) => console.error(error));
  }, []); // Empty dependency array means this effect runs once after initial render

  return <div>{data && <p>Data: {data}</p>}</div>;
}

export default DataFetchingComponent;
