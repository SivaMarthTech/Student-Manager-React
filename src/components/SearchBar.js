import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <div className="search">
    <input
      type="text"
      placeholder="Search Students"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="input"
    />
  </div>
);

export default SearchBar;
