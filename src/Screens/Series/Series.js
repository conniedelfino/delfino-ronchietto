import React, {Component} from "react";
import CardMovie from "../../Components/CardMovie/CardMovie";

const apikey = "34b4c2e895ea107e9ad43461851606f7";

class Series extends Component{
    constructor(props){
        super(props);
        this.state = {
            series: [],
            pagina: 1,
            busqueda: ""
        };
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apikey}&page=1`)
        .then((response)=> response.json())
        .then((data)=> this.setState({
            series: data.results, 
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
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apikey}&page=${paginaSiguiente}`)
        .then((response)=> response.json())
        .then((data)=>
            this.setState({
                series: this.state.series.concat(data.results),
                pagina: paginaSiguiente
            })
        )
        .catch((error)=> console.log(error));

    }

render(){
    let seriesFiltro = this.state.series.filter((serie)=> serie.name.toLowerCase().includes(this.state.busqueda.toLowerCase())
);
if (this.state.series.length === 0){
    return <h3>cargando..</h3>;
}

return(
    <React.Fragment>
        <form onSubmit={(event)=> this.evitarSubmit(event)}>
            <input type="text" value={this.state.busqueda} onChange={(event)=> this.controlarInput(event)} placeholder="filtrar series" />
        </form>

        <section className="row cards">
            {seriesFiltro.map((serie)=>(
                <CardMovie key={serie.id} id={serie.id} titulo={serie.name} descripcion={serie.overview} imagen={serie.poster_path} tipo="serie" />
            ))}

        </section>

        <button onClick={()=>this.cargarMas()}>Cargar más</button>

    </React.Fragment>
);

}

}

export default Series;