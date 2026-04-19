import React, { Component } from "react";


class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: {}
    };
  }

  componentDidMount() {
    const MovieID = this.props.match.params.id
    fetch(`https://api.themoviedb.org/3/movie/${MovieID}?api_key=34b4c2e895ea107e9ad43461851606f7`)
      .then((response) => response.json())
      .then((data) => this.setState({ peliculas: data}))
      .catch((error) => console.log(error));
  }

  render(){
    return(
        <>
        {!this.state.peliculas.title ? (
        <h3>Cargando...</h3>
      ) : (
        <section>
          <h2>{this.state.peliculas.title}</h2>

          <img src={"https://image.tmdb.org/t/p/w500" + this.state.peliculas.poster_path} alt={this.state.peliculas.title}
          />

          <p>{this.state.peliculas.overview}</p>

          <p>
            <strong>Fecha de estreno:</strong>{" "}
            {this.state.peliculas.release_date}
          </p>

          <p>
            <strong>Duración:</strong>{" "}
            {this.state.peliculas.runtime} minutos
          </p>

          <p>
            <strong>Puntuación:</strong>{" "}
            {this.state.peliculas.vote_average}
          </p>
        </section>
      )}
        </>
    )
  }
}

export default MovieDetails