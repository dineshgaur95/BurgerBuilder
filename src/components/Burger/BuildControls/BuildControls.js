import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControlS = (props) => (
  <div className="BuildControls">
    <p>Current Price:<strong>{props.price}</strong></p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.IngredientAdded(ctrl.type)}
        removed={() => props.IngredientRemoved(ctrl.type)}
      />
    ))}

    <button className="OrderButton">ORDER NOW</button>
  </div>
);

export default BuildControlS;
