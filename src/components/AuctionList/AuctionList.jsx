import React from "react";
import "./AuctionList.css";
import Card from "../Card/Card";

const AuctionList = ({ auctions }) => {
  console.log(auctions);
  return (
    <div className="card-container">
      {auctions.map((auction) => (
        <Card
          key={auction.id}
          id={auction.id}
          title={auction.title}
          daysLeft={auction.daysLeft}
          highestBid={auction.highestBid}
        />
      ))}
    </div>
  );
};

export default AuctionList;
