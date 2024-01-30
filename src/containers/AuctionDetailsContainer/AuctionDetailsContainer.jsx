import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import AuctionDetails from '../../components/AuctionDetails/AuctionDetails'

const AuctionDetailsContainer = ({AuktionID}) => {

  const {id} = useParams();

  const [auktion, setAuktion] = useState(null)
  const [bids, setBids] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [highestBid, setHighestBid] = useState(null)
  const [userBid, setUserBid] = useState(0)

  useEffect(() => {
    fetchBidHistory()
    fetchAuctionDetails()
  }, [id])



  const fetchAuctionDetails = async () => {
    try {
      const response = await fetch(`/api/auktion/100/${id}`)
      const data = await response.json()
      setAuktion(data)
      console.log(data)
    } catch (error) {
      console.error('Felmeddelande:', error)
    }
  }

  const fetchBidHistory = async () => {
    try {
      const response = await fetch(`/api/bud/100/${id}`)
      const data = await response.json()
      setBids(data)
      handleHighestBid(data)
      console.log("Bud:", data)
    } catch (error) {
      console.error('Felmeddelande:', error)
    }
  }

  const handleHighestBid = (data) => {
    setHighestBid(data[data.length-1].summa)
  }

  const handleBidClick = async () => {
    if(userBid < highestBid) {
      alert("Du har lagt för lågt bud")
      return
    }

    try {
      const response = await fetch(`/api/bud/`, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            "Summa": userBid, 
            "AuktionID": id,
            "Budgivare":"Kalle"
            })
      })
      
      if (!response.ok) {
          throw new Error('Något gick fel.')
      }

      const data = await response.json()
      console.log('Bud skapat.', data)
      }
      catch(error) {('Något gick fel.', error.message)}
  }

  const removeAuction = async () => {
    try {
      const response = await fetch(`/api/auktion/${id}`, {
        method: "DELETE",
      })
      
      if (!response.ok) {
          throw new Error('Något gick fel.')
      }

      const data = await response.json()
      console.log('Bud skapat.', data)
      }
      catch(error) {('Något gick fel.', error.message)}
  }
  

  const updateNumberInput = (e) => {
    const { value } = e.target
    setUserBid(value)
  }

  const handleTitleChange = (e) => {
    const { value } = e.target
    setTitle(value)
  }

  const handleDescriptionChange = (e) => {
    const { value } = e.target
    setDescription(value)
  }

  const updateAuction = async () => {

    try {
      const response = await fetch("/api/auktion", {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(
            {
              AuktionID: id,
              Titel: title, 
              Beskrivning: description,
              StartDatum: "2024-01-01",
              SlutDatum: "2024-01-31",
              Gruppkod: 100,
              Utropspris: 2500, 
              SkapadAv: "Kalle"
            }
          )
      })
      
      if (!response.ok) {
          throw new Error('Något gick fel.')
      }

      const data = await response.json()
      console.log('Auktion uppdaterad.', data)
      }
      catch(error) {console.error('Något gick fel.', error.message)}
  }

  if (!auktion) {
    return <p>Auktion laddas...</p>
  }

  return <AuctionDetails 
  auktion={auktion}
  bids={bids}
  title={title}
  description={description}
  highestBid={highestBid}
  handleTitleChange={handleTitleChange}
  handleDescriptionChange={handleDescriptionChange}
  updateAuction={updateAuction}
  handleBidClick={handleBidClick}
  updateNumberInput={updateNumberInput}
  />
}

export default AuctionDetailsContainer