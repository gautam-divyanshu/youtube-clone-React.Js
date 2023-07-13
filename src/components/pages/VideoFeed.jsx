import React from "react";
import "./Page.css";

const VideoFeed = (props) => {
  return (
    <div>
      <div class="card" id="card">
        <img src={props.url} class="card-img-top" alt=".png" />
        <div class="card-body" id="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">
            {props.channel}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoFeed;
