import React from "react";
import "./Page.css";

let title = "title";
let channel = "channel";

const SearchVideosCard = (props) => {
  title = props.title;
  channel = props.channel;

  return (
    <div>
      <div id="search__card">
        <div id="search__img">
          <img src={props.url} class="card-img-top" alt=".png" />
        </div>
        <div id="search-card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{channel}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchVideosCard;
export { title, channel };
