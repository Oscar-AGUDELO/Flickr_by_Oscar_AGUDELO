import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Nav.css"
import FavoritesIcon from "../../assets/FavotitesIcon.svg";
import SearchIcon from "../../assets/SearchIcon.svg";

function Nav({ setShowData, setGo }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const goBack = () =>{
    setShowData(false);
    setGo(false);
  }
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    (screenWidth < 750) ? (
    <nav id="navContainer">
      <Link to="/" className="navItem" onClick={goBack}>
        <img src={SearchIcon} alt="SearchIcon" />
        <p>Search</p>
      </Link>
      <Link to="/Favorites" className="navItem">
        <img src={FavoritesIcon} alt="FavoritesIcon" />
        <p>Favorites</p>
      </Link>
    </nav>
     )
     : (
      <nav id="navContainer_desktop">
      <Link to="/Favorites" className="navItem">
        <img src={FavoritesIcon} alt="FavoritesIcon" />
        <div><p>Favorites</p></div>
      </Link>
      <Link to="/" className="navItem" onClick={goBack}>
        <img src={SearchIcon} alt="SearchIcon" />
        <div><p>Search</p></div>
      </Link>
    </nav>
  ));
}

export default Nav;
