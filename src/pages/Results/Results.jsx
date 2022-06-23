import React from "react";
import "./Results.css";
import likeOFF from "../../assets/likeOFF.svg";

const Results = ({ convertedData, keyword, goToPhotoViewer }) => {
  return (
    <ul className="SearchResultsContain">
      {convertedData.map((pic) => {
        const srcPic = "https://farm" + pic.farm + ".static.flickr.com/" + pic.server + "/" + pic.id + "_" + pic.secret + ".jpg";
        return (
          <li key={pic.id} className="buttonPic" onClick={() => goToPhotoViewer(pic)}>
            {pic.goToPhoto ?
              (<div className="fullPicContainer">
              <img className="fullPic" alt={"photo" + keyword.Search} src={srcPic} />
              <div className="containerTitle"><h1>{pic.title}</h1><button><img alt="likeOFFIcon" src={likeOFF} /></button></div>
              </div>)
              :
              (
                <img className="pic" alt={"photo" + keyword.Search} src={srcPic} />
              )
            }
          </li>
        )
      })}
    </ul>
  );
};

export default Results;