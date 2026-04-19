import React, { Component } from "react";


class SeriesDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: {}
    };
  }

  componentDidMount() {
    const SeriesID = this.props.match.params.id
    fetch(`https://api.themoviedb.org/3/tv/${SeriesID}?api_key=34b4c2e895ea107e9ad43461851606f7`)
      .then((response) => response.json())
      .then((data) => this.setState({ series: data}))
      .catch((error) => console.log(error));
  }

  render(){
    return(
        <>
        {!this.state.series.name ? (
        <h3>Cargando...</h3>
      ) : (
        <section>
          <h2>{this.state.series.name}</h2>

          <img src={"https://image.tmdb.org/t/p/w500" + this.state.series.poster_path} alt={this.state.series.name}/>

          <p>{this.state.series.overview}</p>

          <p>
            <strong>Fecha de estreno:</strong>{" "}
            {this.state.series.release_date}
          </p>

          <p>
            <strong>Duración:</strong>{" "}
            {this.state.series.runtime} minutos
          </p>

          <p>
            <strong>Puntuación:</strong>{" "}
            {this.state.series.vote_average}
          </p>
        </section>
      )}
        </>
    )
  }
}

export default SeriesDetails