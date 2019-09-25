import React from "react";

export const NumberButton = props => {
  return (
    <div className="numberButton">
      <button className="eachButton">{props.numbers}</button>
    </div>
  );
};

