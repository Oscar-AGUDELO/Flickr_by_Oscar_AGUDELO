import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Nav.css"
import zLogo from "../../assets/zLogo.png";

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
      console.log(screenWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <div className="navContainer">
      <div className="navHeader">
        <div className="navName">
          <h1>NAME HERE</h1>
        </div>
        <button type="button" onClick={toggleNav} className="navButton">
          {" "}
          <img src={zLogo} alt="burger" className="navLogo" />
        </button>
      </div>

      {/* {(toggleMenu || screenWidth > 750) && ( */}
      {toggleMenu && (
        <nav className="navBurger">
          <Link to="/" className="navItemBurger">
            Home
          </Link>
          <Link to="/SearchResults" className="navItemBurger">
            Page 1
          </Link>
          <Link to="/Favorites" className="navItemBurger">
            Page 2
          </Link>
          <Link to="/PhotoViewer" className="navItemBurger">
            About Us
          </Link>
        </nav>
      )}
    </div>
  );
}

export default Nav;
