import React from "react";
import styled from "styled-components";

const SearchBox = styled.form`
    display: flex;
    flex-direction: row;
    justinfy-content: space-between;
    width: 100%;
    padding: 20px;
    border-radius: 5px;
    color: black;
    
    & input {
        padding: 10px 20px;
        font-size: 14px;
        background: #fff;
        border: none;
        border-radius: 2rem;
        outline: none;
        font-weight: bold;
        width: 90%;
        margin-right: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    }

   & button {
        padding: 5px;
        font-size: 14px;
        width: 60px;
        height: 50px;
        cursor: pointer;
        bbackground: #fff;
        border: none;
        border-radius: 50%;
        outline: none;
        font-weight: bold;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);

        & img {
            width: 60%;
            height: 60%;
        }

    } 
`;

const SearchComponent = (props) => {
    const { updateCity, fetchWeather } = props;
    return (
        <>
           <SearchBox onSubmit={fetchWeather}>
                <input
                    type="text" 
                    placeholder="City name" 
                    onChange={(e) => updateCity(e.target.value)}
                />
                <button type={"submit"}>
                    <img src={"/weather/icons/search.svg"} alt={"search"} />
                </button>
            </SearchBox>
        </>
    );
}

export default SearchComponent;