import React, { Component } from "react";
import Bid from "./Bid";
import { getImageForLot } from "../../../dao/LotDao";
import "./fiveLatestBids.css";

const getDateFromSeconds = date => {
  if (date !== null) {
    return new Date(date.seconds * 1000);
  } else {
    return null;
  }
};

export class FiveLatestBid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageDictionary: {}
    };
  }

  getFiveLatest = () => {
    return this.props.lots
      .filter(function(el) {
        return el.lastBidTime != null;
      })
      .sort(function(o1, o2) {
        let a = getDateFromSeconds(o1.lastBidTime);
        let b = getDateFromSeconds(o2.lastBidTime);
        return a > b ? -1 : a < b ? 1 : 0;
      })
      .slice(0, 5);
  };

  getImageUrl = lot => {
    let imageUrl = this.state.imageDictionary[lot.id];
    if (!imageUrl) {
      console.log(lot.image);
      getImageForLot(lot.id, lot.image)
        .getDownloadURL()
        .then(url => {
          this.setState(state => ({
            imageDictionary: {
              ...state.imageDictionary,
              [lot.id]: url
            }
          }));
        });
    }
    return imageUrl;
  };

  render() {
    const fiveLatest = this.getFiveLatest();
    return (
      <div className="fiveLatestBids-component">
        <h2 className="titleFiveLatestBids">Top 5 Most Recent Bids:</h2>
        <div className="bids-wrapper">
          {fiveLatest.map((lot, index) => {
            let imageUrl = this.getImageUrl(lot);
            return <Bid lot={lot} key={index} url={imageUrl} />;
          })}
        </div>
      </div>
    );
  }
}

export default FiveLatestBid;
