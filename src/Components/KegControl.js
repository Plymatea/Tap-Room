import React from "react";
import KegList from "./KegList";
import KegDetail from "./KegDetail";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null,
      mainKegList: [
        {
          name: 'Cider',
          brand: 'Portland Cider Company',
          price: 6.5,
          abv: "5%",
          pintsRemaining: 124,
          pintsWhenFull: 124,
          id: 1
        },
        {
          name: 'Ale',
          brand: 'Widmer',
          price: 5.5,
          abv: "5.5%",
          pintsRemaining: 124,
          pintsWhenFull: 124,
          id: 2
        },
        {
          name: 'IPA',
          brand: 'FullSail',
          price: 6,
          abv: "7.2%",
          pintsRemaining: 124,
          pintsWhenFull: 124,
          id: 3
        }
      ],
    };
  }

  handleSelectKegClick = (id) => {
    console.log("handleSelectKegClick")
    const selectedKeg = this.state.mainKegList.filter( (keg) => keg.id === id)[0];
    console.log({selectedKeg})
    this.setState({selectedKeg: selectedKeg})
  }

  render() {
    let currentlyVisibleState = null
    if (this.state.selectedKeg != null){
      currentlyVisibleState = (
        <React.Fragment>
          <KegDetail keg={this.state.selectedKeg}/>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        <KegList 
        kegList ={this.state.mainKegList}
        onSelectKegClick ={this.handleSelectKegClick}/>
        {currentlyVisibleState}
      </React.Fragment>
    )
  }
}

export default KegControl;