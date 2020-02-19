import React, { Component } from "react";

import { getAuctionEndDate } from "../dao/AuctionInfo";
//import { closeAllAuctions } from "../../dao/LotDao";

import CountdownClock from "react-custom-countdown-clock";

let getDateFromSeconds = date =>
  date !== null && date !== undefined ? new Date(date.seconds * 1000) : null;

// function closeAllAuctions() {
//   db.collection("lots")
//     .get()
//     .then(snapshot => {
//       const promises = [];
//       snapshot.forEach(doc => {
//         promises.push(
//           doc.ref.update({
//             closed: true
//           })
//         );
//       });
//       return Promise.all(promises);
//     });

//   updateAuctionEndDate(new Date());
// }

class TimeRemaining extends Component {
  constructor(props) {
    super(props);

    this.state = {
      endTime: null,
      ready: false
    };
  }

  componentDidMount() {
    this.setState({ ready: false });
    this.getEndDate();
  }

  getEndDate = () => {
    getAuctionEndDate().onSnapshot(snapshot => {
      let date;
      if (snapshot.data() === undefined) {
        date = null;
      } else {
        date = snapshot.data().endTime;
      }

      this.setState({
        endTime: getDateFromSeconds(date),
        ready: true
      });
    });
  };

  render() {
    if (!this.state.ready) {
      return <p>Loading</p>;
    }
    return (
      <CountdownClock
        className="water-aid-logo"
        endTime={this.state.endTime}
        //afterFunction={closeAllAuctions}
      />
    );
  }
}

export default TimeRemaining;
