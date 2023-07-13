import { useEffect, useState } from "react";
import VideoFeed from "../components/pages/VideoFeed";

function ApiData() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const apiKey = "";
    const maxResult = "50";
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=${maxResult}&key=${apiKey}`;
    const options = {
      method: "GET",
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setResult(result.items);
    } catch (error) {
      console.error(error);
    }
  };

  return result.map((data) => {
    return (
      <VideoFeed
        key={data.id}
        url={data.snippet.thumbnails.maxres.url}
        title={data.snippet.title}
        channel={data.snippet.channelTitle}
      />
    );
  });
}

export default ApiData;
