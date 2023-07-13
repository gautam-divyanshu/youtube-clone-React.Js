import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import History from "./components/pages/History";
import Likedvideo from "./components/pages/Likedvideo";
import Watchlater from "./components/pages/Watchlater";
import Subscription from "./components/pages/Subscription";
import SearchVideos from "./components/pages/SearchVideos";

import Video from "./components/Video";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="history" element={<History />} />
        <Route path="likedvideo" element={<Likedvideo />} />
        <Route path="watchlater" element={<Watchlater />} />
        <Route path="search/:searchTerm" element={<SearchVideos />} />
        <Route exact path="video/:videoId" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
