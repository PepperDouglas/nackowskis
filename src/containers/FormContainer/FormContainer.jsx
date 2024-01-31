import React, { useState } from "react";
import Form from "../../components/Form/Form";

const FormContainer = ({ closeModal }) => {
  const [Titel, setTitel] = useState("");
  const [Beskrivning, setBeskrivning] = useState("");
  const [StartDatum, setStartDatum] = useState("");
  const [SlutDatum, setSlutDatum] = useState("");
  const [Utropspris, setUtropspris] = useState("");
  const [SkapadAv, setSkapadAv] = useState("");

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "Titel":
        setTitel(value);
        break;
      case "Beskrivning":
        setBeskrivning(value);
        break;
      case "StartDatum":
        setStartDatum(value);
        break;
      case "SlutDatum":
        setSlutDatum(value);
        break;
      case "Utropspris":
        setUtropspris(Number(value));
        break;
      case "SkapadAv":
        setSkapadAv(value);
        break;
    }
  };

  // skapa auktion
  const handleSubmit = async (e) => {
    e.preventDefault(); //undvika att hela sidan laddas om
    setLoading(true);

    const url = "/api/auktion";
    const gruppkod = 100;
    const auctionData = {
      Titel,
      Beskrivning,
      StartDatum,
      SlutDatum,
      gruppkod,
      Utropspris,
      SkapadAv,
    };
    console.log(auctionData);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(auctionData),
      });

      if (!response.ok) {
        throw new Error("Något gick fel.");
      }

      const data = await response.json();
      console.log("Auktion skapad.", data);
    } catch (error) {
      console.error("Något gick fel.", error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
        closeModal();
      }, 1000);
    }
  };

  const handleClose = (e) => {
    closeModal()
  }

  return (
    <Form
      Titel={Titel}
      Beskrivning={Beskrivning}
      StartDatum={StartDatum}
      SlutDatum={SlutDatum}
      Utropspris={Utropspris}
      SkapadAv={SkapadAv}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      loading={loading}
      closeModal={handleClose}
    />
  );
};

export default FormContainer;
