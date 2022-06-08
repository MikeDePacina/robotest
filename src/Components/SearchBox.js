import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <input
      type="search"
      placeholder="search members"
      className="bg-teal-200 m-1 p-1.5"
      onChange={searchChange}
    />
  );
};

export default SearchBox;
