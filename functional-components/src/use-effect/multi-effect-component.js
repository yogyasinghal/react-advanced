import React, { useState, useEffect } from "react";

function MultiEffectComponent() {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);

  useEffect(() => {
    const fetchData1 = async () => {
      const response = await fetch("https://api.example.com/data1");
      const result = await response.json();
      setData1(result);
    };

    fetchData1();
  }, []); // Run once after initial render

  useEffect(() => {
    const fetchData2 = async () => {
      const response = await fetch("https://api.example.com/data2");
      const result = await response.json();
      setData2(result);
    };

    fetchData2();
  }, []); // Run once after initial render

  return (
    <div>
      {data1 && (
        <div>
          <h1>Data 1:</h1>
          <pre>{JSON.stringify(data1, null, 2)}</pre>
        </div>
      )}

      {data2 && (
        <div>
          <h1>Data 2:</h1>
          <pre>{JSON.stringify(data2, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
export default MultiEffectComponent;
