import React, { useState, useEffect } from "react";
import "../style.css";
import WeatherDetails from "./WeatherDetails";

function SearchMain() {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);
  return (
    <>
      <div className='wrap'>
        <div className='search'>
          <input
            type='search'
            placeholder='City Name'
            id='search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className='searchButton'>Search</button>
      </div>
      <WeatherDetails />
    </>
  );
}

export default SearchMain;
