import React from "react";
import Keg from "./Keg";

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
          id={keg.id}
        />
      )}
    </React.Fragment>
  )
};

export default KegList;