// useCustomHook.js
import { useState, useEffect } from "react";

function useCustomHook(initialValue) {
  // State and other hooks can be used here
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    // Effect logic can be added here
    console.log("Custom hook effect: ", value);

    // Cleanup logic (if needed)
    return () => {
      console.log("Clean up in custom hook");
    };
  }, [value]);

  // Custom hook returns values or functions that components can use
  return {
    value,
    setValue,
  };
}

export default useCustomHook;
