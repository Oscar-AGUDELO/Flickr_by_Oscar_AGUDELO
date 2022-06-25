import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./SearchResults.css";
import goBackIcon from "../../assets/goBackIcon.svg";
import Results from "../Results/Results";
import Nav from "../../components/Nav/Nav";
const SearchResults = ({ convertedData, setConvertedData, data, keyword, setGo, showData, setShowData }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const addData = data.photos.photo.map((pic) => {
      const onepic = { ...pic };
      onepic.isFavorite = false;
      onepic.goToPhoto = false;
      return onepic;
    });
    setConvertedData(addData);
  }, [data.photos.photo, setConvertedData, showData]);

  const [goToPhoto, setGoToPhoto] = useState(false);
  const goToPhotoViewer = (item) => {
    setGoToPhoto(!goToPhoto)
    const goToPic = convertedData.find(pic => pic.id === item.id)
    goToPic.goToPhoto = !goToPic.goToPhoto
  }

  const goBack = () => {
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
  if (!showData) {
    return <Navigate to='/' />
  }

  return (
    (screenWidth < 750) ? (
      <div className="SearchResultsContainer">
        <button className="header" onClick={goBack}><img alt="goBackIcon" src={goBackIcon} /><h1>Results for "{keyword.Search}"</h1></button>
        <Results setConvertedData={setConvertedData} convertedData={convertedData} keyword={keyword} goToPhotoViewer={goToPhotoViewer} />
      </div>
    )
      : (
        <div id="SearchResultsContainer_desktop">
          <header className="header"><h1>Results for "{keyword.Search}"</h1><Nav /></header>
          <Results setConvertedData={setConvertedData} convertedData={convertedData} keyword={keyword} goToPhotoViewer={goToPhotoViewer} />
        </div>
      ))
};

export default SearchResults;
