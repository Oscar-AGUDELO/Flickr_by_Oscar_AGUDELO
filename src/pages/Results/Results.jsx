import React, { useEffect, useState } from "react";
import "./Results.css";
import likeOFF from "../../assets/likeOFF.svg";
import likeON from "../../assets/likeON.svg";

const Results = ({ setConvertedData, convertedData, keyword, goToPhotoViewer }) => {
  //   const [initialData, setFavoritesData] = useState([]);
  //   const addDataInFavorites = () =>{
  //   if (initialData.length === 0){
  //     return null}else{
  //     localStorage.setItem('initialData', JSON.stringify(initialData));
  //     const favoritesData = localStorage.getItem('initialData');
  //     localStorage.setItem('favoritesData', [initialData, favoritesData]);
  // }}
  const getLocalItems = () => {
    let list = localStorage.getItem('listFavoritesFlickr');
    if (list) {
      return JSON.parse(localStorage.getItem('listFavoritesFlickr'));
    } else {
      return []
    }
  };
  const [items, setItems] = useState(getLocalItems());
  // const deleteItem = (id) => {
  //   // console.log('deleted');
  //   const updatedItems = items.filter((elem) => {
  //       return elem.id !== id;
  //   })
  //   setItems(updatedItems);
  // }


  useEffect(() => {
    // localStorage.setItem('thapaName', 'vinod');
    localStorage.setItem('listFavoritesFlickr', JSON.stringify(items));
  }, [items]);


  const addFavorites = (item) => {
    const goToPic = convertedData.find(pic => pic.id === item.id)
    console.log(goToPic)
    goToPic.favorites = !goToPic.favorites
    goToPic.isFavorite = !goToPic.isFavorite
    const srcPic = { id: goToPic.id, title: goToPic.title, isFavorite: goToPic.isFavorite, src: "https://farm" + goToPic.farm + ".static.flickr.com/" + goToPic.server + "/" + goToPic.id + "_" + goToPic.secret + ".jpg" };
    if (goToPic.favorites === true) {
      setItems([...items, srcPic]);
    }
  }

  const foundItemsFavorites = (item) => {
    if (items.find(pic => pic.id === item.id)) {
      return true;
    } else {
      return false;
    }
  }

  const deleteFavorites = (item) => {
    const updatedItems = items.filter((elem) => {
      return elem.id !== item.id;
    })
    setItems(updatedItems);
  }




  return (
    <ul className="SearchResultsContain">
      {convertedData.map((pic) => {
        const srcPic = "https://farm" + pic.farm + ".static.flickr.com/" + pic.server + "/" + pic.id + "_" + pic.secret + ".jpg";
        return (
          <li key={pic.id} className="buttonPic" >
            {pic.goToPhoto ?
              (<div className="fullPicContainer">
                <button className="fullPic" onClick={() => goToPhotoViewer(pic)}><img alt={"photo" + keyword.Search} src={srcPic} /></button>
                <div className="containerTitle_Like">
                  <h1 className="titlePhoto" >{pic.title}</h1>
                  {!foundItemsFavorites(pic) ?
                    <button onClick={() => addFavorites(pic)}>
                      <img className="likeIcon" alt="likeOFFIcon" src={likeOFF} />
                    </button>
                    :
                    <button onClick={() => deleteFavorites(pic)}>
                      <img className="likeIcon" alt="likeONIcon" src={likeON} />
                    </button>
                  }
                </div>
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