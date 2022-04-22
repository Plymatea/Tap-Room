import React from "react";
import KegList from "./KegList";

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
    // this.handleSelectKegClick = this.handleSelectKegClick.bind(this);
  }

  handleSelectKegClick = (id) => {
    console.log("handleSelectKegClick")
    const selectedKeg = this.state.mainKegList.filter( (keg) => keg.id === id)[0];
    console.log({selectedKeg})
    this.setState({selectedKeg: selectedKeg})
  }

  render() {
    return (
      <React.Fragment>
        <KegList 
        kegList ={this.state.mainKegList}
        onSelectKegClick ={this.handleSelectKegClick}/>
      </React.Fragment>
    )
  }
}

export default KegControl;