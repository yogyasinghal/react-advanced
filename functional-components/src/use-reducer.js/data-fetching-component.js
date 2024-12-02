import React, { useReducer } from "react";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const reducer = (state, action) => {
  switch (action.mytype) {
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: null };
    case "FETCH_ERROR":
      return { ...state, loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};

function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["item-1", "item-2"]);
      // reject(new Error("oops"));
    }, 3000);
  });
}

function DataFetchingComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ mytype: "FETCH_START" });
    try {
      const result = await fetchDataFromAPI();
      dispatch({ mytype: "FETCH_SUCCESS", payload: result });
    } catch (error) {
      dispatch({ mytype: "FETCH_ERROR", payload: error.message });
    }
  };

  return (
    <div>
      {state.loading && <p>Loading...</p>}
      {state.data && (
        <p>
          Data:{" "}
          {state.data.map((item) => (
            <span>{item}</span>
          ))}
        </p>
      )}
      {state.error && <p>Error: {state.error}</p>}
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

export default DataFetchingComponent;
