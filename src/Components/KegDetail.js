import React from "react";
// import PropTypes from "prop-types";

function KegDetail(props) {
  const {keg} = props;
  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>Keg Id: {keg.id}</h3>
      <h3>Name: {keg.name}</h3>
      <h3>Brand: {keg.brand}</h3>
      <h3>ABV: {keg.abv}</h3>
      <h3>Price: {keg.price}</h3>
      <h3>Pints remaining: {keg.pintsRemaining}</h3>
      <h3>Pints new Keg: {keg.pintsWhenFull}</h3>
      <button onClick={ () => props.onEditingKegClick(keg.id)}>Edit Ticket</button>
    </React.Fragment>
  )
};

export default KegDetail