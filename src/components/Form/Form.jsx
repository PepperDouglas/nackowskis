import React from "react";
import "./Form.css";

const Form = ({
  Titel,
  Beskrivning,
  StartDatum,
  SlutDatum,
  SkapadAv,
  Utropspris,
  handleInputChange,
  handleSubmit,
  loading,
  closeModal,
}) => {

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="Titel">
          Titel:
        </label>
        <input
          className="input"
          type="text"
          id="Titel"
          name="Titel"
          value={Titel}
          onChange={handleInputChange}
        />

        <label className="label" htmlFor="Beskrivning">
          Beskrivning:
        </label>
        <input
          className="input"
          type="text"
          id="Beskrivning"
          name="Beskrivning"
          value={Beskrivning}
          onChange={handleInputChange}
        />

        <label className="label" htmlFor="StartDatum">
          Startdatum:
        </label>
        <input
          className="input"
          type="date"
          id="StartDatum"
          name="StartDatum"
          value={StartDatum}
          onChange={handleInputChange}
        />

        <label className="label" htmlFor="SlutDatum">
          Slutdatum:
        </label>
        <input
          className="input"
          type="date"
          id="SlutDatum"
          name="SlutDatum"
          value={SlutDatum}
          onChange={handleInputChange}
        />

        <label className="label" htmlFor="Utropspris">
          Utropspris:
        </label>
        <input
          className="input"
          type="number"
          id="Utropspris"
          name="Utropspris"
          value={Utropspris}
          onChange={handleInputChange}
        />

        <label className="label" htmlFor="SkapadAv">
          Användare:
        </label>
        <input
          className="input"
          type="text"
          id="SkapadAv"
          name="SkapadAv"
          value={SkapadAv}
          onChange={handleInputChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Skapar auktion..." : "Skapa auktion"}
        </button>

        <button className="button-close" type="button" onClick={closeModal}>
          Stäng
        </button>
      </form>
    </div>
  );
};

export default Form;
