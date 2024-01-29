import { useState, useEffect } from 'react';
import { allURL } from '../../constants/apiurls';
import MockCard from './MockCard';
import mockDb from './MockDB';
import SearchContainer from './SearchContainer/SearchContainer';

const AuctionContainer = () => {

    const [auctionData, setAuctionData] = useState([]);
    const [searchedAuctions, setSearchedAuctions] = useState([]);
    const [searchParameter, setSearchParameter] = useState([]);


    //This one gets all auctions data, with error checking
    const getAuctions = async () => {
        return await fetch(allURL).then(res => {
            if(!res.ok){
                throw new Error("Res not OK");
            }
            return res.json();
        })
        .then(res => {
            //Maybe some extra functionality here (like setting active auctions)
            return res;
            
        }).catch((error) => {
            console.log("Error: " + error);
        });
    }


    //This one is a helper to map depending on search or not?


    //Function to filter to only non-expired auctions by current date less than the auctions end-date




    //This one filters the res and sets the got data
    const setAuctions = async () => {
        let response = await getAuctions();
        setAuctionData(response);
    }

    //Component Mounting
    useEffect(() => {
        setAuctions();
    }, []);

    //Mapper
    const cardDisplay = mockDb.map((card, i) => {
        return(
            <div className='cardUnit' key={i}>
                <MockCard props={card}></MockCard>
            </div>
        );
    })

    return(
        <>
            <SearchContainer updateSearch={setSearchParameter}></SearchContainer>
            {cardDisplay}
        </>
    );
}

export default AuctionContainer;