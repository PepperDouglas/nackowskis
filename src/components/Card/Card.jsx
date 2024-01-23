// AuctionCard.js

import React from "react";
import { Link } from "react-router-dom";

const Card = ({ auction }) => {
  const { id, title, highestBid, endDate, isOpen } = auction;

  return (
    <div className="auction-card">
      <h2>{title}</h2>
      <p>Högsta bud: {highestBid}</p>
      <p>Slutdatum: {endDate}</p>
      <p>Status: {isOpen ? "Open" : "Closed"}</p>

      <Link to={`/auctions/${id}`}>
        <button>Visa detaljer</button>
      </Link>
    </div>
  );
};

export default Card;
