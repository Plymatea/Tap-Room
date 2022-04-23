import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function KegList (props) {
  return (
    <React.Fragment>
      {props.kegList.map((keg) =>
        <Keg
          name={keg.name}
          brand={keg.brand}
          abv={keg.abv}
          price={keg.price}
          pintsRemaining={keg.pintsRemaining}
          pintsWhenFull={keg.pintsWhenFull}
          key={keg.id}
          id={keg.id} 
          onSellingPint = {props.onSellingPint}
          onSelectKegClick ={props.onSelectKegClick}
        />
      )}
    </React.Fragment>
  )
};

KegList.propTypes = {
  kegList: PropTypes.array,
  onSelectKegClick: PropTypes.func,
  onSellingPint: PropTypes.func,
}

export default KegList;