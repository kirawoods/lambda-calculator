import React from "react";

export const NumberButton = props => {
  return (
    <div className="numberButton">
      <button 
      className="eachNumberButton"
      onClickCapture={() => props.setValue(props.numbers)}>
      {props.numbers}
      </button>
    </div>
  );
};

