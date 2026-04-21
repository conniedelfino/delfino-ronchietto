import React from "react";
import SeccionPeliPopulares from "../../Components/PelisPopulares/PelisPopulares";
import SeccionNowPlaying from "../../Components/NowPlaying/NowPlaying";
import Search from "../../Components/Search/Search";


function Home() {
  return (
    <div className="container">
      <h3>HOME</h3>
      
      <Search />
      
      <h2 className="alert alert-primary">Películas populares</h2>
      <SeccionPeliPopulares />

      <h2 className="alert alert-primary">En cartelera</h2>
      <SeccionNowPlaying />

    </div>
  );
}

export default Home;