import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <div style={spinnerStyle}>
      <img src={spinner} alt="Loading..." style={{ width: "150px" }} />
    </div>
  );
};

const spinnerStyle = {
  minHeight: "50vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default Spinner;
