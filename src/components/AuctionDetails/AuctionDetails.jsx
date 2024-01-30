import React from 'react'
import "./AuctionDetails.css"

const AuctionDetails = ({auktion, bids, handleTitleChange, handleDescriptionChange, title, description, updateAuction, updateNumberInput, handleBidClick, highestBid }) => {

  console.log(auktion)

  return (
    <div className='auction-box'>

      <div className='header-box'>
        <div>
          <img src={"https://bilweb-auctions-images.s3-eu-west-1.amazonaws.com/1800x1200/object/volkswagen-typ-1-13568-16228315111.jpeg"} />
          </div>
          <div className='header-text'>
          <input type='text' value={title} onChange={handleTitleChange} placeholder={auktion.titel}></input>
          <p>5 dagar kvar</p>
          <input onChange={updateNumberInput} type="number" placeholder='Lägg bud' />

          <button
          onClick={() => updateAuction()} 
          disabled={(new Date(auktion.slutDatum) < new Date())}>Uppdatera</button>

          <button
          onClick={() => removeAuction()}
          disabled={highestBid !== null}>
            Ta bort
          </button>

          <button
          onClick={() => handleBidClick()}
          disabled={(new Date(auktion.slutDatum) < new Date())}>
            Lägg bud
          </button>
          </div>
        </div>

        <div className='information-box'>
          <div>
            <h2>Beskrivning:</h2>
            <input type='text' value={description} onChange={handleDescriptionChange} placeholder={auktion.beskrivning}></input>
          </div>
          
          <div className='bid-box'>
            <h2>Budhistorik:</h2>
            <ul className='bid-history'>
              
              {(new Date(auktion.slutDatum) > new Date()) ? (bids.map((bid) => {
              return <li>{bid.summa}</li>
              }).reverse()) : bids[bids.length-1].summa}
            </ul>
          </div>

        </div>

    </div>
  )
}

// använd denna kod som har rätt variabler
{/* <div>
    <h1>Auktion: {auktion.Titel}</h1>
    <img src={auktion.bild} alt={`Auktion ${auktion.AuktionID}`} />
    <p>Auktion ID: {auktion.AuktionID}</p>
    <p>Beskrivning: {auktion.Beskrivning}</p>
    <p>StartDatum: {auktion.StartDatum}</p>
    <p>SlutDatum: {auktion.SlutDatum}</p>
    <p>Pris: {auktion.Utropspris}kr</p>
</div> */}

export default AuctionDetails