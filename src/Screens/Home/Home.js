import React from "react";
import PelisPopulares from "../../components/PelisPopulares/PelisPopulares";
import SeccionNowPlaying from "../../components/NowPlaying/NowPlaying";

function Home() {
  return (
    <>


      <h2>Películas populares</h2>
      <PelisPopulares />

      <h2>En disposición</h2>
      <SeccionNowPlaying />

      
    </>
  );
}

export default Home;