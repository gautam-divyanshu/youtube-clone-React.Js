import React from "react";
import "./Page.css";
import ApiSearch from "../../api/ApiSearch";

const SearchVideos = () => {
  return (
    <div id="card_grid">
      <ApiSearch />
    </div>
  );
};

export default SearchVideos;
