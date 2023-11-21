import React, { useRef } from "react";

function MutablePropertyComponent() {
  const mutableObjectRef = useRef({ value: "initial" });

  const handleChangeValue = () => {
    mutableObjectRef.current.value = "changed";
    console.log("Mutable Value:", mutableObjectRef.current.value);
  };

  return (
    <div>
      <p>Mutable Value: {mutableObjectRef.current.value}</p>
      <button onClick={handleChangeValue}>Change Value</button>
    </div>
  );
}

export default MutablePropertyComponent;
