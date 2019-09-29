import React from "react";

export const NumberButton = props => {
  let classes = "eachNumberButton";
  if (props.numbers === "0") {
    classes = "eachNumberButton zeroButton";
  }
  
  return (
    <div className="numberButton">
      <button 
        className={classes}
        onClickCapture={() => props.setValue(props.numbers)}
      >
        {props.numbers}
      </button>
    </div>
  );
};

