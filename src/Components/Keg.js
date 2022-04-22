import React from "react";

function Keg (props) {
  return (
    <React.Fragment>
        <div onClick = { ()=> props.onSelectKegClick(props.id)}>
        <h3>{props.name} - {props.brand}</h3>
        <p><em>ABV: {props.abv} - Pnt: ${props.price}</em></p>
        <p>Pints Remaing: {props.pintsRemaining}</p>
        </div>
        <button onClick={ () => props.onSellingPint(props.id)}>Sell a Pint</button>
        
        <hr/>
    </React.Fragment>
  );
};

export default Keg;