import React, {Component} from "react";
import { Link } from "react-router-dom";

class CardMovie extends Component{
    constructor(props){
        super(props);
        this.state ={
            verMas : false
        };
    }

    mostrar(){
        this.setState({
            verMas: !this.state.verMas
        });
    }

    render(){
         return(
            <article className="single-card-movie">
                <img src={"https://image.tmdb.org/t/p/w342/" + this.props.imagen} className="card-img-top"
                    alt={this.props.titulo}/>

                <div className="cardBody">
                    <h5 className="card-title">{this.props.titulo}</h5>
                    {this.state.verMas ? (<p className="card-text">{this.props.descripcion}</p>) : null}
                    <button className="btn btn-primary" onClick={()=> this.mostrar}>{this.state.verMas ? "Ver menos" : "Ver Más"}</button>
                    <Link to={`/${this.props.tipo}/${this.props.id}`}>
                        <button className="btn btn-primary">Detalle</button>
                    </Link>
                    <button href="" className="btn alert-primary">🩶</button>
                </div>
            </article>
    );
    }
}

export default CardMovie;