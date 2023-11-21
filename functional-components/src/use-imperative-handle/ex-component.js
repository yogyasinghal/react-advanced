import React, { useRef, useImperativeHandle } from "react";

// Child component
const ChildComponent = React.forwardRef((props, ref) => {
  const internalValue = useRef(0);

  // Expose functions or values to the parent using useImperativeHandle
  useImperativeHandle(ref, () => ({
    increment: () => {
      internalValue.current += 1;
    },
    getValue: () => internalValue.current,
  }));

  return <div>Child component</div>;
});

// Parent component
const ParentComponent = () => {
  const childRef = useRef(null);

  const handleButtonClick = () => {
    // Access the functions or values exposed by the child component
    childRef.current.increment();
    const value = childRef.current.getValue();
    console.log("Value:", value);
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleButtonClick}>Increment Value</button>
    </div>
  );
};

export default ParentComponent;
