import React, { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import "./Search.css";
import iconTrad from "../../assets/trad.svg";
import logo from "../../assets/logo.svg";
const Search = ({ showData, go, charging, setKeyword }) => {
  const [noKeyword, setNoKeyword] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  const handleChange = (e) => {
    if (e.target.value === null) {
      setNoKeyword(true)
    } else {
      setKeyword({
        ...Search,
        [e.target.name]: e.target.value,
      });
    }
  };
  console.log(noKeyword)
  if (showData) {
    return <Navigate to='/SearchResults' />
  }
  if (!showData)
    return (
      (screenWidth < 750) ? (
        <div id="SearchContainer">
          <header ><h1>Search</h1></header>
          <form onSubmit={charging}>
            <label >
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
        : (
          <div id="SearchContainer_vdesktop">
            <div className="langages">
              <img alt="icon" src={iconTrad} />
              <select>
                <option value="English">English</option>
                <option value="French">French</option>
              </select>
            </div>
            <section>
              <img alt="icon" src={logo} />
              <form className="search" onSubmit={charging}>
                <label>
                  <input
                    name="Search"
                    onChange={handleChange}
                    type="text" placeholder="Search for photos"
                    className="inputForm"
                    minLength="8">
                  </input>
                  <span className="enterKeyword">Please enter a keyword to search fon photos</span>
                </label>
                <button type="submit" className="go">
                  Search
                </button>
              </form>
              
              {go ?
                <div className="lds-ring_desktop"><div></div><div></div><div></div><div></div></div>
                : null}
            </section>

          </div>
        ))
};

export default Search;