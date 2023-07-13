import React from "react";
import "./Page.css";

import ApiData from "../../api/Api";

const Home = () => {
  return (
    <div>
      <div class="row row-cols-1  row-cols-md-2  row-cols-xl-3  g-4"  id="card_grid">
        <ApiData />
      </div>
    </div>
  );
};

export default Home;
