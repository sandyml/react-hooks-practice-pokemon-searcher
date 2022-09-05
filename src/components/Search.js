import React from "react";

function Search({ searchTerm, onChangeSearch }) {

  const handleChange = (e) => {
    onChangeSearch(e.target.value);
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleChange} 
        value={searchTerm} 
        className="prompt" 
        placeholder="I CHOOSE YOU..."
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
 