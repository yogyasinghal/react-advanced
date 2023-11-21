import React, { useState, useEffect } from "react";

function DebouncedEffectComponent({ searchQuery }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Debounce the search query
    const debounceTimer = setTimeout(() => {
      // Fetch results based on the debounced search query
      fetchResults(searchQuery)
        .then((data) => setResults(data))
        .catch((error) => console.error(error));
    }, 500);

    // Cleanup function to clear the timer
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  return (
    <div>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DebouncedEffectComponent;
