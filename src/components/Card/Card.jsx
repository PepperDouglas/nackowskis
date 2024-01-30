import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ id, title, highestBid, daysLeft }) => {
  function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  const backgroundStyle = {
    background: `linear-gradient(
      180deg,
      #fff -10%,
      rgba(255, 255, 255, 0) 10%,
      rgba(255, 255, 255, 0.31) 50%,
      #fff 70%,
      #fff 100%
    ), url(./images/${getRandomNumber()}.png)`,
  };

  return (
    <Link to={`/${id}`} className="link">
      <div key={id} className="auction-card" style={backgroundStyle}>
        <h2 className="card-title">{title}</h2>
        <p className="card-enddate">
          {daysLeft > 0 ? `${daysLeft} dagar kvar` : `Auktionen är slut`}
        </p>
        <p className="card-leading-bid">Ledande bud</p>
        <p className="card-price">{highestBid} KR</p>
        <button className="card-button">Lägg bud</button>
      </div>
    </Link>
  );
};

export default Card;
