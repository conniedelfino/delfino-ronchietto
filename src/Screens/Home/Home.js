import React from "react";
import PelisPopulares from "../../Components/PelisPopulares/PelisPopulares";
import SeccionNowPlaying from "../../Components/NowPlaying/NowPlaying";

function Home() {
  return (
    <div className="conteiner">


      <h2 className="alert alert-primary">Películas populares</h2>
      <PelisPopulares />

      <h2 className="alert alert-primary">En disposición</h2>
      <SeccionNowPlaying />

      
    </div>
  );
}

export default Home;