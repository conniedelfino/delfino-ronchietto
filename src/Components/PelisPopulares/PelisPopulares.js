import React, { Component } from "react";
import CardMovie from "../CardMovie/CardMovie";

const apikey = "34b4c2e895ea107e9ad43461851606f7";

class SeccionPeliPopulares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: []
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`)
      .then((response) => response.json())
      .then((data) => this.setState({ peliculas: data.results }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <section className="row cards" id="movies">
        {this.state.peliculas.slice(0, 4).map((pelicula) => (
          <CardMovie
            key={pelicula.id}
            id={pelicula.id}
            titulo={pelicula.title}
            descripcion={pelicula.overview}
            imagen={pelicula.poster_path}
          />
        ))}
      </section>
    );
  }
}

export default SeccionPeliPopulares;