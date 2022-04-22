import React from "react";

function Keg (props) {
  return (
    <React.Fragment>
        <h3>{props.name} - {props.brand}</h3>
        <p><em>ABV: {props.abv} - Pint: ${props.price}</em></p>
        <hr/>
    </React.Fragment>
  );
};

export default Keg;