import { Link } from "react-router-dom";
import React from "react";
import "./Nav.css"
import FavoritesIcon from "../../assets/FavotitesIcon.svg";
import SearchIcon from "../../assets/SearchIcon.svg";

function Nav() {
  return (
    <nav className="navContainer">
      <Link to="/" className="navItem">
        <img src={SearchIcon} alt="SearchIcon" />
        <p>Search</p>
      </Link>
      <Link to="/Favorites" className="navItem">
        <img src={FavoritesIcon} alt="FavoritesIcon" />
        <p>Favorites</p>
      </Link>
    </nav>
  );
}

export default Nav;
