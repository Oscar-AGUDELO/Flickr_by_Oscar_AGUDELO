import React, { useState, useEffect } from "react";
import "./Favorites.css";
import { Link } from "react-router-dom";
import likeOFF from "../../assets/likeOFF.svg";
import likeON from "../../assets/likeON.svg";
import Nav from "../../components/Nav/Nav";
import goBackIcon from "../../assets/goBackIcon.svg";

const Favorites = () => {
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
  const getLocalItems = () => {
    let list = localStorage.getItem('listFavoritesFlickr');
    if (list) {
      return JSON.parse(localStorage.getItem('listFavoritesFlickr'));
    } else {
      return []
    }
  };


  const [goToPhoto, setGoToPhoto] = useState(false);
  const goToPhotoViewer = (item) => {
    setGoToPhoto(!goToPhoto)
    const goToPic = listFavorites.find(pic => pic.id === item.id)
    goToPic.goToPhoto = !goToPic.goToPhoto
  }
  const [listFavorites, setListFavorites] = useState(getLocalItems());
  const deleteFavorites = (id) => {
    const updatedItems = listFavorites.filter((elem) => {
      return elem.id !== id;
    })
    setListFavorites(updatedItems);
  }
  useEffect(() => {
    localStorage.setItem('listFavoritesFlickr', JSON.stringify(listFavorites));
  }, [listFavorites]);


  return (
    (screenWidth < 750) ? (
      <div id="FavoritesContainer">
        <header><h1>Favorites</h1></header>
        {listFavorites.length < 1 ?
          <div><p>Search for a photo and mark ir as your favorite. Photos marked as favorites can be viewed offline</p></div>
          : (
            <ul className="SearchResultsContain">
              {listFavorites.map((pic) => {
                return (
                  <li key={pic.id} className="buttonPic" >
                    {pic.goToPhoto ?
                      (<div className="fullPicContainer">
                        <button className="fullPic" onClick={() => goToPhotoViewer(pic)}><img alt={"photoFavorite"} src={pic.src} /></button>
                        <div className="containerTitle_Like">
                          <h1 className="titlePhoto" >{pic.title}</h1>
                          <button onClick={() => deleteFavorites(pic.id)}>
                            {pic.isFavorite ?
                              <img className="likeOFFIcon" alt="likeOFFIcon" src={likeON} />
                              :
                              <img className="likeOFFIcon" alt="likeOFFIcon" src={likeOFF} />
                            }
                          </button></div>
                      </div>)
                      :
                      (
                        <button className="pic" onClick={() => goToPhotoViewer(pic)}><img className="pic" alt={"photoFavorite"} src={pic.src} /></button>
                      )
                    }
                  </li>
                )
              })}
            </ul>
          )
        }
      </div>
    )
      : (
        <div id="FavoritesContainer_desktop">
          <header>
            <div>
              <Link to="/SearchResults" className="link">
                <img alt="goBackIcon" src={goBackIcon} />
              </Link>
              <h1>Back to Results</h1>
            </div>
            <Nav />
          </header>
          {listFavorites.length < 1 ?
            <div className="nophotos"><p>Search for a photo and mark ir as your favorite. Photos marked as favorites can be viewed offline</p></div>
            : (
              <ul className="SearchResultsContain">
                {listFavorites.map((pic) => {
                  return (
                    <li key={pic.id} className="buttonPic" >
                      {pic.goToPhoto ?
                        (<div className="fullPicContainer">
                          <button className="fullPic" onClick={() => goToPhotoViewer(pic)}><img alt={"photoFavorite"} src={pic.src} /></button>
                          <div className="containerTitle_Like">
                            <h1 className="titlePhoto" >{pic.title}</h1>
                            <button onClick={() => deleteFavorites(pic.id)}>
                              {pic.isFavorite ?
                                <img className="likeIcon" alt="likeOFFIcon" src={likeON} />
                                :
                                <img className="likeIcon" alt="likeOFFIcon" src={likeOFF} />
                              }
                            </button>
                            </div>
                        </div>)
                        :
                        (
                          <button className="pic" onClick={() => goToPhotoViewer(pic)}><img className="pic" alt={"photoFavorite"} src={pic.src} /></button>
                        )
                      }
                    </li>
                  )
                })}
              </ul>
            )
          }
        </div>
      ));
};

export default Favorites;
