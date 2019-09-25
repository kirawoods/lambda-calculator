import React, {useState} from "react";
import {specials} from "../../../data.js";
import {SpecialButton} from "./SpecialButton.js";

//import any components needed

//Import your array data to from the provided data file

export const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialLabels] = useState(specials);
  return (
    <div className = "specials">
      {specialLabels.map((specials, index)=> (
        <SpecialButton key = {index} specials = {specials} />
      ))}
    </div>
  );
};
