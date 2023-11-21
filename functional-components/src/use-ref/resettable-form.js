import React, { useRef } from "react";

function ResettableForm() {
  const inputRef = useRef();

  const handleReset = () => {
    // Reset the input value
    inputRef.current.value = "";
    // Focus on the input field
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default ResettableForm;
