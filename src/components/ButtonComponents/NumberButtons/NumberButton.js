import React from "react";

export const NumberButton = props => {
  return (
    <div className="numberButton">
      <button className="eachNumberButton">{props.numbers}</button>
    </div>
  );
};

