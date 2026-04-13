import React, { Component } from "react";
import CardMovie from "../CardMovie/CardMovie";

const apikey = "34b4c2e895ea107e9ad43461851606f7";

class SeccionSeriesPopulares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: []
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apikey}`)
      .then((response) => response.json())
      .then((data) => this.setState({ series: data.results }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
        <>
    <h2 className="alert alert-primary">Series</h2>
      <section className="row cards" id="movies">
        {this.state.series.filter((series, idx)=> idx < 4).map((series) => (
          <CardMovie
            key={series.id}
            id={series.id}
            titulo={series.name}
            descripcion={series.overview}
            imagen={series.poster_path}
          />
        ))}
      </section>
      </>
    );
  }
}

export default SeccionSeriesPopulares;