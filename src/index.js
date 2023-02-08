import React from "react";
import ReactDOM from "react-dom";
import * as calculator from "/src/calculator.js";

ReactDOM.render(
  <ul>
    <li>{calculator.add(1, 2)}</li>
    <li>{calculator.multiply(2, 3)}</li>
    <li>{calculator.subtract(7, 2)}</li>
    <li>{calculator.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);

// Alternative code for the same result: 

// import React from "react";
// import ReactDOM from "react-dom";
// import math from "/src/calculator.js";

// ReactDOM.render(
//   <ul>
//     <li>{math.add(1, 2)}</li>
//     <li>{math.multiply(2, 3)}</li>
//     <li>{math.subtract(7, 2)}</li>
//     <li>{math.divide(5, 2)}</li>
//   </ul>,
//   document.getElementById("root")
// );
