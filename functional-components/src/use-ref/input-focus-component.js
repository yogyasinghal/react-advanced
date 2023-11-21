import React, { useRef, useEffect } from "react";

function InputFocusComponent() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus on the input element when the component mounts
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}

export default InputFocusComponent;
