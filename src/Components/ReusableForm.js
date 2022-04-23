import React from "react";


function ReusableForm (props) {
  return (
    <React.Fragment>
    <form onSubmit={props.formSubmissionHandler}>
      <input
        type='text'
        name='name'
        defaultValue={props.selectedKeg.name ? props.selectedKeg.name : "Name" } 
      />
      <input
        type='text'
        name='brand'
        defaultValue={props.selectedKeg.brand ? props.selectedKeg.brand : "Brand"} 
      />
      <input
        type='number'
        name='price'
        step={.01}
        defaultValue={props.selectedKeg.price ? props.selectedKeg.price : 0 }
      />
      <input
        type='text'
        name='abv'
        defaultValue={props.selectedKeg.abv ? props.selectedKeg.abv : "abv%"}
      />
      <input
        type='number'
        name='pintsRemaining'
        defaultValue={props.selectedKeg.pintsRemaining ? props.selectedKeg.pintsRemaining : 124} 
      />
      <input
        type='number'
        name='pintWhenFull'
        defaultValue={props.selectedKeg.pintsWhenFull ? props.selectedKeg.pintsWhenFull : 124} 
      />
      <button type='submit'>{props.buttonText}</button>
    </form>
  </React.Fragment>
  )
};

export default ReusableForm;