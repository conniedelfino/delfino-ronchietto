import React from "react";
import PelisPopulares from "../../Components/PelisPopulares/PelisPopulares";
import SeccionNowPlaying from "../../Components/NowPlaying/NowPlaying";
import { Link } from "react-router-dom";
import Search from "../../Components/Search/Search";

function Home() {
  return (
    <div className="container">

      <Search />
      
      <h2 className="alert alert-primary">Películas populares</h2>
      <PelisPopulares />

      <h2 className="alert alert-primary">En disposición</h2>
      <SeccionNowPlaying />
    </div>
  );
}

export default Home;