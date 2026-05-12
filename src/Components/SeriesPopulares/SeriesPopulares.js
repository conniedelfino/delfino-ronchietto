import React, { Component } from "react";
import CardMovie from "../CardMovie/CardMovie";

const apikey = "34b4c2e895ea107e9ad43461851606f7";

function SeccionSeriesPopulares(props) {

  const [series, setSeries] = useState([]);

  useEffect(
    () => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apikey}`)
      .then((response) => response.json())
      .then((data) => setSeries(data.results))
      .catch((error) => console.log(error));
  }, []);

    if (this.state.series.lenght === 0){
      return <h3>cargando.. </h3>;
    }

    return (
      <section className="row cards" id="movies">
        {this.state.series.filter((serie, idx)=> idx < 4).map((serie) => (
          <CardMovie
            key={serie.id}
            id={serie.id}
            titulo={serie.name}
            descripcion={serie.overview}
            imagen={serie.poster_path}
            tipo = "serie"
          />
        ))}
      </section>
    );
  }

export default SeccionSeriesPopulares;