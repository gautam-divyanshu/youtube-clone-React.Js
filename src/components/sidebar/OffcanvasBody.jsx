import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FeedbackIcon from "@mui/icons-material/Feedback";
import YouTubeIcon from "@mui/icons-material/YouTube";

const OffcanvasBody = () => {
  return (
    <div>
      <div class="offcanvas-body" className="off_body">
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <HomeIcon />
            <a href="/" class="nav-link text-white " aria-current="page">
              Home
            </a>
          </li>

          <li>
            <SubscriptionsIcon />
            <a href="/subscription" class="nav-link text-white">
              Subscriptions
            </a>
          </li>
          <hr />
          <li>
            <HistoryIcon />
            <a href="/history" class="nav-link text-white">
              History
            </a>
          </li>
          <li>
            <VideoLibraryIcon />
            <a href="/" class="nav-link text-white">
              Your videos
            </a>
          </li>
          <li>
            <WatchLaterIcon />
            <a href="/watchlater" class="nav-link text-white">
              Watch later
            </a>
          </li>
          <li>
            <ThumbUpIcon />
            <a href="/likedvideo" class="nav-link text-white">
              Liked videos
            </a>
          </li>
          <hr />
          <li>
            <YouTubeIcon sx={{ color: "red" }} />
            <a href="/" class="nav-link text-white">
              YouTube Premium
            </a>
          </li>
          <li>
            <YouTubeIcon sx={{ color: "red" }} />
            <a href="/" class="nav-link text-white">
              YouTube Studio
            </a>
          </li>
          <li>
            <YouTubeIcon sx={{ color: "red" }} />
            <a href="/" class="nav-link text-white">
              YouTube music
            </a>
          </li>
          <li>
            <YouTubeIcon sx={{ color: "red" }} />
            <a href="/" class="nav-link text-white">
              YouTube kids
            </a>
          </li>
          <hr />
          <li>
            <SettingsIcon />
            <a href="/" class="nav-link text-white">
              Settings
            </a>
          </li>
          <li>
            <FlagIcon />
            <a href="/" class="nav-link text-white">
              Report History
            </a>
          </li>
          <li>
            <HelpOutlineIcon />
            <a href="/" class="nav-link text-white">
              Help
            </a>
          </li>
          <li>
            <FeedbackIcon />
            <a href="/" class="nav-link text-white">
              Send feedback
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OffcanvasBody;
