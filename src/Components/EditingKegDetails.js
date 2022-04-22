import React from "react";
import ReusableForm from "./ReusableForm";

function EditKeg (props) {
  const {keg} = props;

  function handleEditEditFormSubmission(e) {
    e.preventDefault();
    props.onEditingKegInList({
      name: e.target.name.value, 
      brand: e.target.brand.value, 
      price: e.target.price.value, 
      abv: e.target.abv.value, 
      pintsRemaining: e.target.pintsRemaining.value, 
      pintsWhenFull: e.target.pintWhenFull.value,
      id: keg.id,
    })
  }
    
  return (
    <React.Fragment>
      <ReusableForm 
        buttonText = "Finish Editing"
        formSubmissionHandler = {handleEditEditFormSubmission}
      />
    </React.Fragment>
  )
}

export default EditKeg;