import React, { useState } from "react";

function ControlledInput() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <label>
        Controlled Input:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <p>Typed Value: {inputValue}</p>
    </div>
  );
}

export default ControlledInput;
