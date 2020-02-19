import React from "react";

const Bid = props => {
  const lotName = props.lot.lotName;
  const currentBid = props.lot.currentBid;
  const bidderTableNo = props.lot.currentBidderTable
    ? props.lot.currentBidderTable
    : "n/a";
  const url = props.url;

  return (
    <div className="bid">
      <div
        className="bidItem bidImage"
        style={{ backgroundImage: `url(${url})` }}
      ></div>

      <div className="bidItem bidName"> {lotName}</div>
      <div className="bidItem">£{currentBid}</div>
      <div className="bidItem">Table: {bidderTableNo}</div>
    </div>
  );
};

export default Bid;
