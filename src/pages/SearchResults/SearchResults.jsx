import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./SearchResults.css";
import goBackIcon from "../../assets/goBackIcon.svg";
import Results from "../Results/Results";

const SearchResults = ({ convertedData, setConvertedData, data, keyword, setGo, showData, setShowData }) => {

  useEffect(() => {
    const addData = data.photos.photo.map((pic) => {
      const onepic = { ...pic };
      onepic.isFavorite = false;
      onepic.goToPhoto = false;
      return onepic;
    });
    setConvertedData(addData);
  }, [showData]);

  const [goToPhoto, setGoToPhoto] = useState(false);
  const goToPhotoViewer = (item) => {
    setGoToPhoto(!goToPhoto)
    const goToPic = convertedData.find(pic => pic.id===item.id)
    goToPic.goToPhoto = !goToPic.goToPhoto
    console.log(goToPic)
    
    console.log(convertedData)
  }

  const goBack = () => {
    setShowData(false);
    setGo(false);
  }

  if (!showData) {
    return <Navigate to='/' />
  }
  return (

    <div className="SearchResultsContainer">
      <button className="header" onClick={goBack}><img alt="goBackIcon" src={goBackIcon} /><h1>Results for "{keyword.Search}"</h1></button>
      <Results convertedData={convertedData} keyword={keyword} goToPhotoViewer={goToPhotoViewer} />

    </div>

  );
};

export default SearchResults;
