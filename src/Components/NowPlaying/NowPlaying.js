import React, { Component } from "react";
import CardMovie from "../CardMovie/CardMovie";

const apikey = "34b4c2e895ea107e9ad43461851606f7";

class SeccionNowPlaying extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: []
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`)
      .then((response) => response.json())
      .then((data) => this.setState({ peliculas: data.results }))
      .catch((error) => console.log(error));
  }

  render() {
    if (this.state.peliculas.length === 0){
      return <h3>cargando..</h3>;
    }

    return (
      <section className="row cards" id="now-playing">
        {this.state.peliculas.filter((pelicula, idx)=> idx < 4).map((pelicula) => (
          <CardMovie
            key={pelicula.id}
            id={pelicula.id}
            titulo={pelicula.title}
            descripcion={pelicula.overview}
            imagen={pelicula.poster_path}
            tipo="pelicula"
          />
        ))}
      </section>
    );
  }
}

export default SeccionNowPlaying;