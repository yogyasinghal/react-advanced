import React, { useReducer } from "react";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
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
  return Promise.resolve({});
}

function DataFetchingComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const result = await fetchDataFromAPI();
      dispatch({ type: "FETCH_SUCCESS", payload: result });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };

  return (
    <div>
      {state.loading && <p>Loading...</p>}
      {state.data && <p>Data: {state.data}</p>}
      {state.error && <p>Error: {state.error}</p>}
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

export default DataFetchingComponent;
