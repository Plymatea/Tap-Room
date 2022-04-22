import React from "react";

function Keg (props) {
  return (
    <React.Fragment>
        <div onClick = { ()=> props.onSelectKegClick(props.id)}>
        <h3>{props.name} - {props.brand}</h3>
        <p><em>ABV: {props.abv} - Pint: ${props.price}</em></p>
        </div>
        <hr/>
    </React.Fragment>
  );
};

export default Keg;