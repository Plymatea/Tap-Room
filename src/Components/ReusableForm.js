import React from "react";


function ReusableForm (props) {
  return (
    <React.Fragment>
    <form onSubmit={props.formSubmissionHandler}>
      <input
        type='text'
        name='name'
        defaultValue={props.selectedKeg.name} 
      />
      <input
        type='text'
        name='brand'
        defaultValue={props.selectedKeg.brand} 
      />
      <input
        type='number'
        name='price'
        step={.01}
        defaultValue={props.selectedKeg.price}
      />
      <input
        type='text'
        name='abv'
        defaultValue={props.selectedKeg.abv}
      />
      <input
        type='number'
        name='pintsRemaining'
        defaultValue={props.selectedKeg.pintsRemaining} 
      />
      <input
        type='number'
        name='pintWhenFull'
        defaultValue={props.selectedKeg.pintsWhenFull} 
      />
      <button type='submit'>{props.buttonText}</button>
    </form>
  </React.Fragment>
  )
};

export default ReusableForm;