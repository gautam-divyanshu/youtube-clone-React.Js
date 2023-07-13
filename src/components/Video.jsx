import React from "react";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";

import "./pages/Page.css";

const Video = (props) => {
  const { videoId } = useParams();

  const url = `https://www.youtube.com/watch?v=${videoId}`;
  return (
    <div className="videoCard">
      <ReactPlayer url={url} controls />
    </div>
  );
};

export default Video;
