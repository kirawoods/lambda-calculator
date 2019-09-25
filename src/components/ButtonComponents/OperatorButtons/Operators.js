import React, {useState} from "react";
import { operators } from '../../../data.js';
import {OperatorButton} from './OperatorButton.js';

//import any components needed

//Import your array data to from the provided data file

export const Operators = props => {
  // STEP 2 - add the imported data to state
  const [operatorLabels] = useState(operators);
  return (
    <div className = "operators">
      {operatorLabels.map((operators, index) => (
        <OperatorButton setValue = {props.setValue} key={index} operators = {operators} />
      ))}
    </div>
  );
};
