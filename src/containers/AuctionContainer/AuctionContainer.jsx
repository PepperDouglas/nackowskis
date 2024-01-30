import { useState, useEffect } from "react";
import { differenceInDays } from "date-fns";
import AuctionList from "../../components/AuctionList/AuctionList";
import SearchContainer from "../Auctions/SearchContainer/SearchContainer";
import FormContainer from "../FormContainer/FormContainer"

const AuctionContainer = () => {
  const [allAuctions, setAllAuctions] = useState([]);
  const [auctionData, setAuctionData] = useState([]);
  const [searchParameter, setSearchParameter] = useState("");

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
        setAllAuctions(auctionsData);
        setAuctionData(auctionsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!allAuctions) {
      return;
    }
    setAuctionData(
      allAuctions.filter((auction) =>
        auction.title.toLowerCase().includes(searchParameter.toLowerCase())
      )
    );
  }, [searchParameter, allAuctions]);

  return (
    <>
      <SearchContainer onSearch={setSearchParameter} />
      <button onClick={}>Ny Auktion</button>
      <AuctionList auctions={auctionData} />
    </>
  );
};

export default AuctionContainer;
