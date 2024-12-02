import React from "react";

import { useSelector } from "react-redux";

export const RequestStatus = () => {
  const requestStatus = useSelector((state) => state.requestStatus);
  return (
    <div className="alert alert-info">
      <div>{requestStatus.message}</div>
      <div>{requestStatus.error}</div>
    </div>
  );
};
