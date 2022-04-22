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
      <h3>Pint in full Keg: {keg.pintsWhenFull}</h3>
      <h3>Pints remaining this keg: {keg.pintsRemaining}</h3>
    </React.Fragment>
  )
};

export default KegDetail