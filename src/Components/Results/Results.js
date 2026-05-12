import React, { useState, useEffect } from "react";
import CardMovie from "../Components/CardMovie/CardMovie";

const apikey = "34b4c2e895ea107e9ad43461851606f7";

function Results(props) {

    const [resultados, setResultados] = useState([]);

    useEffect(() => {

        let busqueda = props.match.params.busqueda;

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`)
            .then((response) => response.json())
            .then((data) => setResultados(data.results))
            .catch((error) => console.log(error));

    }, []);

        return(
            <section className="row cards">
                {this.state.resultados.length === 0 ? (
                    <p>No se encontraron resultados</p>
                ): (
                    this.state.resultados.map((resultado)=> (
                    <CardMovie 
                    key={resultado.id}
                    id={resultado.id}
                    titulo={resultado.title}
                    descripcion={resultado.overview}
                    imagen={resultado.poster_path}
                    />))
                )}
            </section>
        );
    }
    
export default Results;