import React from "react";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import EditingKegDetails from "./EditingKegDetails";
import ReusableForm from "./ReusableForm";


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null,
      editing: false,
      adding: false,
      mainKegList: [
        {
          name: 'Cider',
          brand: 'Portland Cider Company',
          price: 6.5,
          abv: "5%",
          pintsRemaining: 10,
          pintsWhenFull: 124,
          id: 1
        },
        {
          name: 'Ale',
          brand: 'Widmer',
          price: 5.5,
          abv: "5.5%",
          pintsRemaining: 90,
          pintsWhenFull: 124,
          id: 2
        },
      ],
    };
  }

  handleSelectKegClick = (id) => {
    const selectedKeg = this.state.mainKegList.filter( (keg) => keg.id === id)[0];
    this.setState({
      selectedKeg: selectedKeg, 
      adding: false, 
      editing: false
    })
  }

  handleEditingKegClick = () => {
    this.setState({
      editing: true, 
      adding: false
    })
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMainKegList = this.state.mainKegList
      .map(thisKeg => 
        (thisKeg.id === this.state.selectedKeg.id) ?
          ({...kegToEdit}) :
          ({...thisKeg})
        )
    this.setState({
        mainKegList: editedMainKegList,
        editing: false,
        selectedKeg: kegToEdit
      });
  }

  handleSellingPint = (id) => {
    const editedMainKegList = this.state.mainKegList.map((keg) => 
      keg.id === id ? ({...keg, pintsRemaining: Math.max(keg.pintsRemaining-1, 0) }) : ({...keg}))
    this.setState({
    mainKegList: editedMainKegList,
    selectedKeg: null
    })
  }

  handleNewKegClick = () => {
    this.setState({
      selectedKeg: null,
      editing: false,
      adding: true,
    })
  }

  onNewKegFormSubmission = (e) => {
    e.preventDefault();
    this.addingNewKegInList({
      name: e.target.name.value, 
      brand: e.target.brand.value, 
      price: e.target.price.value, 
      abv: e.target.abv.value, 
      pintsRemaining: e.target.pintsRemaining.value, 
      pintsWhenFull: e.target.pintWhenFull.value,
      id: (this.state.mainKegList.length + 1),
    })
  }

  addingNewKegInList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg)
    this.setState({
      mainKegList: newMainKegList,
      adding: false
    })
  }

  render() {
    let currentlyVisibleState = null
    if (this.state.selectedKeg != null && this.state.editing){
      currentlyVisibleState = (
        <React.Fragment>
          <KegDetail 
            keg={this.state.selectedKeg}
            onEditingKegClick = {this.handleEditingKegClick}
          />
          <EditingKegDetails 
            onEditingKegInList={this.handleEditingKegInList}
            selectedKeg = {this.state.selectedKeg}
          />
        </React.Fragment>
      )
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = (
        <React.Fragment>
          <KegDetail 
            keg={this.state.selectedKeg}
            onEditingKegClick = {this.handleEditingKegClick}
          />
        </React.Fragment>
      )
    } else if (this.state.adding) {
      currentlyVisibleState = (
          <ReusableForm 
            formSubmissionHandler={this.onNewKegFormSubmission}
            buttonText="Add New Keg"
            selectedKeg={{}}
          />
      )
    }

    return (
      <React.Fragment>
        <button onClick={()=>this.handleNewKegClick()}>Add new keg</button>
        <KegList 
        onSellingPint ={this.handleSellingPint}
        kegList ={this.state.mainKegList}
        onSelectKegClick ={this.handleSelectKegClick}/>
        {currentlyVisibleState}
      </React.Fragment>
    )
  }
}

export default KegControl;