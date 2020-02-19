import React from "react";
import image from "../../../images/image.png";
import "./ThirdSlidePlaceholder.css";

class ThirdSlidePlaceholder extends React.Component {
  getBidForTable = (tableNumber, bidArray) => {
    if (bidArray[tableNumber]) {
      return bidArray[tableNumber].bid;
    }
    return 0;
  };

  loopArray = () => {
    let tables = [];
    this.props.lots.forEach(el => {
      let currentBid = el.currentBid || 0;
      let tableBid = this.getBidForTable(el.currentBidderTable, tables);
      let item = {
        table: el.currentBidderTable,
        bid: currentBid + tableBid
      };
      tables[el.currentBidderTable] = item;
    });
    return tables.sort((a, b) => b.bid - a.bid);
  };

  render() {
    let allTableTotals = this.loopArray();

    return (
      <div className='main'>
        <div className='titleContainer'>
          <h1 className='title'>
            Is your table one of the top 10 largest winning bidders?
          </h1>
        </div>

        <div id='images'>
          {allTableTotals.map((item, index) => (
            <div key={index}>
              <img src={image} className='pic' />
              <div id='text'> £{item.bid}</div>
              <div>
                <div className='table'> {item.table}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ThirdSlidePlaceholder;
