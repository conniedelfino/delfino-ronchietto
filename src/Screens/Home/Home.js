import React from "react";
import PelisPopulares from "../../Components/PelisPopulares/PelisPopulares";
import SeccionNowPlaying from "../../Components/NowPlaying/NowPlaying";

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