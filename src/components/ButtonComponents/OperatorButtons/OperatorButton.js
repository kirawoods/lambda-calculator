import React from "react";

export const OperatorButton = props => {
  return (
    <div>
      <button
        className="individualButton"
        onClick={() => props.setValue(props.operators.value)}
      >
        {props.operators.char}
      </button>
    </div>   
  );
};
