import React, { useState, useEffect } from "react";
import CardMovie from "../CardMovie/CardMovie";

const apikey = "34b4c2e895ea107e9ad43461851606f7";

function SeccionPeliPopulares(props) {

  const [peliculas, setPeliculas] = useState([]);

  useEffect(
    () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`)
      .then((response) => response.json())
      .then((data) => setPeliculas(data.results))
      .catch((error) => console.log(error));
  }, []);

    if (this.state.peliculas.length === 0){
      return 
        <h3>cargando...</h3>
    }
    
    return (
      <section className="row cards" id="movies">
            {this.state.peliculas.filter((pelicula, idx)=> idx < 4).map((pelicula) => (
          <CardMovie
            key={pelicula.id}
            id={pelicula.id}
            titulo={pelicula.title}
            descripcion={pelicula.overview}
            imagen={pelicula.poster_path}
            tipo = "pelicula"
          />
        ))}
      </section>
    );
  }

export default SeccionPeliPopulares;