import React, { useEffect, useRef } from "react";

function PreviousPropsComponent({ value }) {
  const prevPropsRef = useRef();

  useEffect(() => {
    prevPropsRef.current = value;
  }, [value]);

  return (
    <div>
      <p>Current Prop: {value}</p>
      <p>Previous Prop: {prevPropsRef.current}</p>
    </div>
  );
}

export default PreviousPropsComponent;
