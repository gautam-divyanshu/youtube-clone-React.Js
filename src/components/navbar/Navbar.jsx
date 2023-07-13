import React from "react";
import "./Navbar.css";
import SidebarBtn from "../sidebar/SidebarBtn";
import SearchBar from "./Searchfeed.jsx";

import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  return (
    <header id="navbarDiv">
      <nav class="navbar navbar-expand">
        <div class="container-fluid">
          <div className="navbrand">
            <SidebarBtn />
            <h5>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/YouTube_dark_logo_2017.svg/1280px-YouTube_dark_logo_2017.svg.png"
                alt="youtube logo"
              />
            </h5>
          </div>

          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
            className="navbar_search_div"
          >
            <SearchBar />

            <div className="ul_div">
              <ul class="navbar-nav ">
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    <VideoCallIcon sx={{ fontSize: "30px", color: "white" }} />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    <NotificationsIcon
                      sx={{ fontSize: "30px", color: "white" }}
                    />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    <AccountCircleIcon
                      sx={{ fontSize: "30px", color: "white" }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
