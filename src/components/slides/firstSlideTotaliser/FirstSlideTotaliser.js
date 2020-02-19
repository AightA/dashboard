import React from "react";
import "./FirstSlideTotaliser.css";

import Totaliser from "./Totaliser.js";
import FiveLatestBid from "./FiveLatestBid";

class FirstSlideTotaliser extends React.Component {
  render() {
    return (
      <div className='polaroid'>
        <div
          className='container'
          style={{ display: "flex", flexDirection: "row" }}
        >
          <FiveLatestBid lots={this.props.lots} />
          <Totaliser lots={this.props.lots} />
        </div>
      </div>
    );
  }
}

export default FirstSlideTotaliser;
