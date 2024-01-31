import { useState } from "react";
import "./SearchContainer.css";

const SearchContainer = ({ updateSearch }) => {
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
