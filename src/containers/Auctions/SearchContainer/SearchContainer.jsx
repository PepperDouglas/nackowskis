import { useState } from "react";


const SearchContainer = ({updateSearch}) => {

    const [fieldValue, setFieldValue] = useState("");


    const updateValue = (e) => {
        const {value} = e.target;
        setFieldValue(value);
    }

    const updateSearchParameter = () => {
        updateSearch(fieldValue);
    }

    return(
        <>
            <input value={fieldValue} placeholder="Search auction" onChange={updateValue}></input>
            <button onClick={updateSearchParameter}>Sök</button>
        </>
    )
}

export default SearchContainer;