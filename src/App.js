import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Navigate, Routes, Route } from "react-router-dom";
import Search from "./pages/Search/Search";
import SearchResults from "./pages/SearchResults/SearchResults";
import Favorites from "./pages/Favorites/Favorites";
import Nav from "./components/Nav/Nav";

const App = () => {
  
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isFavorite, setIsFavorite] = useState(false);
  const [convertedData, setConvertedData] = useState([]);
  const [keyword, setKeyword] = useState({ Search: "" });
  const [showData, setShowData] = useState(false);
  const [data, setData] = useState([]);
  const [go, setGo] = useState(false);
  const API = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=7dc498bf8c2a4a431362a1b49c8a301e&tags=" + keyword.Search + "&per_page=3&format=json&nojsoncallback=1";
  
  const fetchAPI = async () => {
    try {
      await axios.get(API)
        .then((res) => setData(res.data))
        .catch(console.log("err"));
    } catch {
      console.log("Erre")
    }
  };

  const restetWeb = () => {
    (<Navigate to='/' />);
    setShowData(false);
  };

  const charging = (e) => {
    e.preventDefault();
    try {
    setGo(true);
    setTimeout(() => {
      fetchAPI();
      setTimeout(() => {
        setShowData(true);
      }, 1500);
    }, 1500);
  } catch {restetWeb();}
  };

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
    <div className="appDivContainer">
      <div className="appDivContainerBody">
        <Routes>
          <Route path="/" element={<Search showData={showData} go={go} charging={charging} setKeyword={setKeyword} />} />
          <Route path="/SearchResults" element={<SearchResults convertedData={convertedData} setConvertedData={setConvertedData} keyword={keyword} setGo={setGo} showData={showData} setShowData={setShowData} data={data} />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </div>
      <Nav setShowData={setShowData} setGo={setGo} />
    </div >
  )
  : (
  <div className="appDivContainer">
      <div className="appDivContainerBody">
        <Routes>
          <Route path="/" element={<Search showData={showData} go={go} charging={charging} setKeyword={setKeyword} />} />
          <Route path="/SearchResults" element={<SearchResults convertedData={convertedData} setConvertedData={setConvertedData} keyword={keyword} setGo={setGo} showData={showData} setShowData={setShowData} data={data} />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div >
  ))
  
};

export default App;