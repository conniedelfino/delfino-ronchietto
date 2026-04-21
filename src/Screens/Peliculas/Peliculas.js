import React, {Component} from "react";
import CardMovie from "../../Components/CardMovie/CardMovie";

const apikey = "34b4c2e895ea107e9ad43461851606f7";

class Peliculas extends Component{
    constructor(props){
        super(props);
        this.state = {
            peliculas: [],
            pagina: 1,
            busqueda: ""
        };
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`)
        .then((response)=> response.json())
        .then((data)=> this.setState({
            peliculas: data.results, 
            pagina: 1
            })
        )
        .catch((error)=> console.log(error));
    }

    evitarSubmit(event){
        event.preventDefault();
    }

    controlarInput(event){
        this.setState({
            busqueda: event.target.value
        });
    }

    cargarMas(){
        let paginaSiguiente = this.state.pagina + 1;
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`)
        .then((response)=> response.json())
        .then((data)=>
            this.setState({
                peliculas: this.state.peliculas.concat(data.results),
                pagina: paginaSiguiente
            })
        )
        .catch((error)=> console.log(error));

    }

render(){
    let peliculasFiltro = this.state.peliculas.filter((pelicula)=> pelicula.title.toLowerCase().includes(this.state.busqueda.toLowerCase())
);
if (this.state.peliculas.length === 0){
    return <h3>cargabdo..</h3>;
}

return(
    <React.Fragment>
        <form onSubmit={(event)=> this.evitarSubmit(event)}>
            <input type="text" value={this.state.busqueda} onChange={(event)=> this.controlarInput(event)} placeholder="filtrar pelis" />
        </form>

        <section className="row cards">
            {peliculasFiltro.map((pelicula)=>(
                <CardMovie key={pelicula.id} id={pelicula.id} titulo={pelicula.title} descripcion={pelicula.overview} imagen={pelicula.poster_path} tipo="pelicula" />
            ))}

        </section>

        <button onClick={()=>this.cargarMas()}>Cargar más</button>

    </React.Fragment>
);

}

}

export default Peliculas