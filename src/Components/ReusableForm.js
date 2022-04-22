import React from "react";


function ReusableForm (props) {
  return (
    <React.Fragment>
    <form onSubmit={props.formSubmissionHandler}>
      <input
        type='text'
        name='name'
        placeholder={props.selectedKeg.name} />
      <input
        type='text'
        name='brand'
        placeholder={props.selectedKeg.brand} />
      <input
        type='number'
        name='price'
        placeholder={props.selectedKeg.price}/>
      <input
        type='text'
        name='abv'
        placeholder={props.selectedKeg.abv}/>
      <input
        type='number'
        name='pintsRemaining'
        placeholder={props.selectedKeg.pintsRemaining} />
      <input
        type='number'
        name='pintWhenFull'
        placeholder={props.selectedKeg.pintsWhenFull} />
      <button type='submit'>{props.buttonText}</button>
    </form>
  </React.Fragment>
  )
};

export default ReusableForm;