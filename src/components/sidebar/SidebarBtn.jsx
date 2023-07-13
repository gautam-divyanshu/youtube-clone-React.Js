import React from "react";
import "./Sidebar.css";
import MenuIcon from "@mui/icons-material/Menu";

const SidebarBtn = () => {
  return (
    <div>
      <a class="btn" data-bs-toggle="offcanvas" href="#offcanvasExample">
        <MenuIcon sx={{ fontSize: 25 , color:"white"}} />
      </a>
    </div>
  );
};

export default SidebarBtn;
