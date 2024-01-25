import { useState, useEffect } from "react";
import { differenceInDays } from "date-fns";
import AuctionList from "../../components/AuctionList/AuctionList";

const AuctionContainer = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/auktion/100");
        const data = await response.json();
        const auctionsData = data.map((auction) => ({
          id: auction.auktionID,
          title: auction.titel,
          daysLeft: differenceInDays(new Date(auction.slutDatum), new Date()),
          isOpen: new Date(auction.slutDatum) >= new Date(),
          highestBid: auction.utropspris,
        }));
        setAuctions(auctionsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <AuctionList auctions={auctions} />;
};

export default AuctionContainer;
