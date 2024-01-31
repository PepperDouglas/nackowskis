import React from 'react'
import "./AuctionDetails.css"
import { Link } from 'react-router-dom'

const AuctionDetails = ({auktion, bids, handleTitleChange, handleDescriptionChange, title, description, updateAuction, updateNumberInput, handleBidClick, highestBid, removeAuction }) => {

  console.log(auktion)

  return (
    <div className='auction-box'>

      <div className='header-box'>
        <div>
            <img src={"https://images.unsplash.com/photo-1656543802898-41c8c46683a7?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            </div>
            <div className='header-text'>
            <input type='text' value={title} onChange={handleTitleChange} placeholder={auktion.titel}></input>
            <input onChange={updateNumberInput} type="number" placeholder='Lägg bud' />

            <button
            onClick={() => handleBidClick()}
            disabled={(new Date(auktion.slutDatum) < new Date())}>
                Lägg bud
            </button>

            <button
            onClick={() => updateAuction()} 
            disabled={(new Date(auktion.slutDatum) < new Date())}>Uppdatera</button>

            <button
            onClick={() => removeAuction()}
            disabled={highestBid !== null}>
                Ta bort
            </button>
            </div>

            <h1 className='price'>{highestBid ? `Högst bud: ${highestBid}` : `Utropspris: ${auktion.utropspris}`} kr</h1>

        </div>

        <div className='information-box'>
          <div className='description-bid'>
            <h2>Beskrivning:</h2>
            <input className='input' type='text' value={description} onChange={handleDescriptionChange} placeholder={auktion.beskrivning}></input>
          </div>
          
          <div className='bid-box'>
            <h2>Budhistorik:</h2>
            <ul className='bid-history'>
              
              {(new Date(auktion.slutDatum) > new Date()) ? (bids.map((bid) => {
              return <li>{bid.summa} kr</li>
              }).reverse()) : bids[bids.length-1].summa}
            </ul>
          </div>

        </div>

        <Link className='prev' to="/">
              <div>Tillbaks till auktioner</div>
        </Link>

    </div>
  )
}

export default AuctionDetails