import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.css";

const Searchfeed = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);

    window.location.href = `/search/${inputValue}`;
  };
  return (
    <div className="form">
      <form class="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          type="search"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search"
        />
        <button class="btn" type="submit">
          <SearchIcon sx={{ color: "white" }} />
        </button>
      </form>
    </div>
  );
};

export default Searchfeed;
