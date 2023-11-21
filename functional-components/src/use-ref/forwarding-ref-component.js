import React, { useRef, useImperativeHandle } from "react";

const MyInput = React.forwardRef((props, ref) => {
  const inputRef = useRef(null);
  // Expose the inputRef to the parent component
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    // additional methods or properties can be added here
  }));
  return <input ref={inputRef} />;
});

function ForwardingRefComponent() {
  const myInputRef = useRef(null);
  const handleFocus = () => {
    // Call the focus method on the child component
    myInputRef.current.focus();
  };
  return (
    <div>
      <MyInput ref={myInputRef} />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default ForwardingRefComponent;
