import React from "react";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainKegList: [
        {
          name: 'Cider',
          brand: 'Portland Cider Company',
          price: 6,
          abv: "5%",
          pintsRemaining: 124,
          pintsWhenFull: 124,
          id: 1
        },
      ],
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        {/* <KegList /> */}
      </React.Fragment>
    )
  }
}

export default KegControl;