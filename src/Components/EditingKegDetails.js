import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKeg (props) {

  function handleEditFormSubmission(e) {
    e.preventDefault();
    props.onEditingKegInList({
      name: e.target.name.value, 
      brand: e.target.brand.value, 
      price: e.target.price.value, 
      abv: e.target.abv.value, 
      pintsRemaining: e.target.pintsRemaining.value, 
      pintsWhenFull: e.target.pintWhenFull.value,
      id: props.selectedKeg.id,
    })
  }
    
  return (
    <React.Fragment>
      <ReusableForm
        selectedKeg = {props.selectedKeg}
        buttonText = "Finish Editing"
        formSubmissionHandler = {handleEditFormSubmission}
      />
    </React.Fragment>
  )
}

EditKeg.propTypes = {
  onEditingKegInList: PropTypes.func,
  selectedKeg: PropTypes.object
}

export default EditKeg;