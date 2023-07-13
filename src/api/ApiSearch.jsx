import { useEffect, useState } from "react";
import SearchVideosCard from "../components/pages/SearchVideosCard";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ApiSearch = () => {
  const [result, setResult] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const apiKey = "";
    const maxResult = "23";
    const query = searchTerm;
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&order=relevance&q=${query}&key=${apiKey}`;
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

  const linkStyle = {
    color: "inherit",
    textDecoration: "none",
  };

  return result.map((data) => {
    return (
      <Link to={`/video/${data.id.videoId}`} style={linkStyle}>
        <SearchVideosCard
          key={data.id}
          url={data.snippet.thumbnails.high.url}
          title={data.snippet.title}
          channel={data.snippet.channelTitle}
        />
      </Link>
    );
  });
};

export default ApiSearch;
