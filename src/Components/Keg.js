import React from "react";
import PropTypes from "prop-types";

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
        <p>Pints Remaining: {props.pintsRemaining}</p>
        <div className="stockLevel">{stockLevel}</div> 
      </div>
      <button onClick={ () => props.onSellingPint(props.id)}>Sell a Pint</button>
      
      <hr/>
    </React.Fragment>
  );
};

Keg.propTypes = {
  onSelectKegClick: PropTypes.func,
  onSellingPint: PropTypes.func,
  name: PropTypes.string,
  brand: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.number,
  pintsRemaining: PropTypes.number,
  id: PropTypes.number,
  pintWhenFull: PropTypes.number,
}

export default Keg;