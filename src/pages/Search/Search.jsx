import React from "react";
import { Navigate } from 'react-router-dom';
import "./Search.css";
const Search = ({ showData, go, charging, setKeyword }) => {

  const handleChange = (e) => {
    setKeyword({
      ...Search,
      [e.target.name]: e.target.value,
    });
  };
  if (showData) {
    return <Navigate to='/SearchResults' />
   }
  if (!showData)
  return (
    <div className="SearchContainer">
      <header><h1>Search</h1></header>
      <form onSubmit={charging}>
        <label>
          <p>Search Flickr...</p>
          <input
            name="Search"
            onChange={handleChange}
            type="text" />
        </label>
        <button type="submit" className="go">{
          go ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div> : "SEARCH"}
        </button>
      </form>
    </div>
  )
};

export default Search;