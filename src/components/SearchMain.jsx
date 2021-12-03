import React, { useState, useEffect } from "react";
import "../style.css";

function SearchMain() {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);
  return (
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
  );
}

export default SearchMain;
