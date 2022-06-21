import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search/Search";
import SearchResults from "./pages/SearchResults/SearchResults";
import Favorites from "./pages/Favorites/Favorites";
import PhotoViewer from "./pages/PhotoViewer/PhotoViewer";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <div className="appDivContainer">
      <div className="appDivContainerBody">
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/SearchResults" element={<SearchResults />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/PhotoViewer" element={<PhotoViewer />} />
        </Routes>
      </div>
      <Nav />
    </div >
  );
};

export default App;