import React from "react";

import "./Sidebar.css";

import OffcanvasBody from "./OffcanvasBody";

import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  return (
    <div>
      <div
        class="offcanvas offcanvas-start"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas_header">
          <button type="button" data-bs-dismiss="offcanvas">
            <MenuIcon sx={{ fontSize: 25 }} />
          </button>
          <h5>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/YouTube_dark_logo_2017.svg/1280px-YouTube_dark_logo_2017.svg.png"
              alt="youtube logo"
            />
          </h5>
        </div>
        <OffcanvasBody />
      </div>
    </div>
  );
};

export default Sidebar;
