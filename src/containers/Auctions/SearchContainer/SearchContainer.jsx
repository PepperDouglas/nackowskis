import { useState } from "react";
import "./SearchContainer.css";
import { Link } from 'react-router-dom'

const SearchContainer = ({ updateSearch, setAuctions }) => {
  const [fieldValue, setFieldValue] = useState("");

  const updateValue = (e) => {
    const { value } = e.target;
    setFieldValue(value);
  };

  const updateSearchParameter = () => {
    updateSearch(fieldValue);
  };

  return (
    <>
        <button onClick={setAuctions} className="button">
            Aktiva auktioner
        </button>

        <input
        id="input"
        value={fieldValue}
        placeholder="Sök auktion"
        onChange={updateValue}
        ></input>
        <button onClick={updateSearchParameter}>Sök</button>
    </>
  );
};

export default SearchContainer;
