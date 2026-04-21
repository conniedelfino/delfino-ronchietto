import React, { Component } from "react";


class SeriesDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: {}
    };
  }

  componentDidMount() {
    const SeriesID = this.props.match.params.id;
    fetch(`https://api.themoviedb.org/3/tv/${SeriesID}?api_key=34b4c2e895ea107e9ad43461851606f7`)
      .then((response) => response.json())
      .then((data) => this.setState({ series: data}))
      .catch((error) => console.log(error));
  }

  render(){
    return(
        <React.Fragment>
        {!this.state.series.name ? (
        <h3>Cargando...</h3>
      ) : (
        <section>
          <h2>{this.state.serie.name}</h2>

          <img src={"https://image.tmdb.org/t/p/w500" + this.state.serie.poster_path} alt={this.state.serie.name}/>

          <p>{this.state.serie.overview}</p>

          <p>
            <strong>Fecha de estreno:</strong>{" "}
            {this.state.serie.release_date}
          </p>

          <p>
            <strong>Duración:</strong>{" "}
            {this.state.serie.runtime} minutos
          </p>

          <p>
            <strong>Puntuación:</strong>{" "}
            {this.state.serie.vote_average}
          </p>
        </section>
      )}
        </React.Fragment>
    );
  }
}

export default SeriesDetails;