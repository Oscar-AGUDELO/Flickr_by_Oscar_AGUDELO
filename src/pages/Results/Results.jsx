import React from "react";
import "./Results.css";
import likeOFF from "../../assets/likeOFF.svg";

const Results = ({ convertedData, keyword, goToPhotoViewer }) => {
  return (
    <ul className="SearchResultsContain">
      {convertedData.map((pic) => {
        const srcPic = "https://farm" + pic.farm + ".static.flickr.com/" + pic.server + "/" + pic.id + "_" + pic.secret + ".jpg";
        return (
          <li key={pic.id} className="buttonPic" >
            {pic.goToPhoto ?
              (<div className="fullPicContainer">
                <button className="fullPic" onClick={() => goToPhotoViewer(pic)}><img  alt={"photo" + keyword.Search} src={srcPic} /></button>
                <div className="containerTitle_Like">
                  <h1 className="titlePhoto" >{pic.title}</h1>
                  <button>
                    <img alt="likeOFFIcon" src={likeOFF} />
                  </button></div>
              </div>)
              :
              (
                <button className="pic" onClick={() => goToPhotoViewer(pic)}><img className="pic" alt={"photo" + keyword.Search} src={srcPic} /></button>
              )
            }
          </li>
        )
      })}
    </ul>
  );
};

export default Results;