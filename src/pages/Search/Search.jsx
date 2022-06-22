import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";
const Search = () => {
  const [keyword, setKeyword] = useState({ Search: "" });
  const [go, setGo] = useState(false);
  const [data, setData] = useState({});
  const API = "https://random-data-api.com/api/vehicle/random_vehicle";

  const fetchAPI = async () => {
    try {
      const response = await axios.get(API);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const charging = (e) => {
    e.preventDefault();
    setGo(true);
    setTimeout(() => {
      fetchAPI();
    }, 1500);
  };
      console.log(data)
      console.log(keyword)

  const handleChange = (e) => {
    setKeyword({
      ...Search,
      [e.target.name]: e.target.value,
    });
  };
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
  );
};

export default Search;