//This is just a mock-card used for prod purposes


const MockCard = ({props}) => {

    const { auctionID, titel, beskrivning, startDatum, slutDatum, gruppkod, utropspris, skapadAv } = props;

    //get date

    //if slutdatum < dagens datum: return </>
    

    return(
        <div key={auctionID} style={{height: "200px", width: "150px", border: "2px solid black", backgroundColor: "blue"}}>
            <h3>{titel}</h3>
            <p>{beskrivning}</p>

        </div>

    );
}


export default MockCard;