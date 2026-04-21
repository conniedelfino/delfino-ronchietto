import React, { Component } from "react";


class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: {}
    };
  }

  componentDidMount() {
    const MovieID = this.props.match.params.id;
    fetch(`https://api.themoviedb.org/3/movie/${MovieID}?api_key=34b4c2e895ea107e9ad43461851606f7`)
      .then((response) => response.json())
      .then((data) => this.setState({ peliculas: data}))
      .catch((error) => console.log(error));
  }

  render(){
    
    return(

      <React.Fragment>

        {!this.state.peliculas.title ? (<h3>Cargando.. </h3>) :(
        <section>
          <h2>{this.state.pelicula.title}</h2>

          <img src={"https://image.tmdb.org/t/p/w500" + this.state.pelicula.poster_path} alt={this.state.pelicula.title}
          />

          <p>{this.state.pelicula.overview}</p>

          <p>
            <strong>Fecha de estreno:</strong>{" "}
            {this.state.pelicula.release_date}
          </p>

          <p>
            <strong>Duración:</strong>{" "}
            {this.state.pelicula.runtime} minutos
          </p>

          <p>
            <strong>Puntuación:</strong>{" "}
            {this.state.pelicula.vote_average}
          </p>

          
        </section>
      )}
  </React.Fragment>
    );
  }
}

export default MovieDetails;