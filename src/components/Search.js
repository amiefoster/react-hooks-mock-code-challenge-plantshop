import React from "react";

function Search({handleSearchPlant}) {
  

  function handleSearch (e) {
    handleSearchPlant(e.target.value)
  }
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
}

export default Search;
