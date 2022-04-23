import React from "react";

function Keg (props) {

  let stockLevel = "";

  if ((props.pintsRemaining) === 0) {
    stockLevel = "Out of Stock";
  } else if ((props.pintsRemaining) <= 10) {
    stockLevel = "Almost Empty";
  };

  return (
    <React.Fragment>
        <div onClick = { ()=> props.onSelectKegClick(props.id)}>
        <h3>{props.name} - {props.brand}</h3>
        <p><em>ABV: {props.abv} - Pnt: ${props.price}</em></p>
        <p>
          Pints Remaining: {props.pintsRemaining} 
          <div className="stockLevel">{stockLevel}</div> 
        </p>
        </div>
        <button onClick={ () => props.onSellingPint(props.id)}>Sell a Pint</button>
        
        <hr/>
    </React.Fragment>
  );
};

export default Keg;