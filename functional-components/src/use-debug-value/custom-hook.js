import { useState, useEffect, useDebugValue } from "react";

function useCustomHook(initialValue) {
  const [value, setValue] = useState(initialValue);

  // Custom logic...

  // Use useDebugValue to provide a custom label for this hook in React DevTools
  useDebugValue(`Custom Hook: ${value}`);

  return value;
}

export default useCustomHook;
