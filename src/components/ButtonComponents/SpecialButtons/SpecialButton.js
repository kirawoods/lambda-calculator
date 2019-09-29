import React from "react";

export const SpecialButton = props => {
  return (
    <div className="specialButton">
      <button 
      className="eachSpecialButton"
      onClickCapture={() => props.setValue(props.specials)}>
      {props.specials}
      </button>
    </div>
  );
};
