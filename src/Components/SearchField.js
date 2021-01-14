import React from "react";


const SearchField = ({value, onChange, onSearch, onTrend, onRandom}) => {
  return(
    <div className = "buttons">
      <div className = "TRbuttons">
          <button className = "buttonT" onClick={onTrend}>Trending</button>
          <button className = "buttonR" onClick={onRandom}>Random</button>
      </div>
      <div className = "ESbuttons">
          <input className = "in" value={value} onChange={onChange} />
          <button className = "buttonS" onClick={onSearch}>Search</button>
      </div>
    </div>
  );
};
export default SearchField;