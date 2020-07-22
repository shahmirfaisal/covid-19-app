import React from "react";
import Spinner from "react-spinkit";

const SpinnerComponent = ({ margin }) => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: margin,
  };

  return (
    <div style={style}>
      <Spinner name="pacman" color="#6590ff" />
    </div>
  );
};

export { SpinnerComponent as Spinner };
