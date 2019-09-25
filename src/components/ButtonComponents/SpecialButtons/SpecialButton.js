import React from "react";

export const SpecialButton = props => {
  return (
    <div className="specialButton">
      <button className="eachSpecialButton">{props.specials}</button>
    </div>
  );
};
