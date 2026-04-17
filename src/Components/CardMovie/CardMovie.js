import { render } from "@testing-library/react";
import React, {Component} from "react";
import { Link } from "react-router-dom";

class CardMovie extends Component{
    constructor(props){
        super(props)
        this.state ={
            datos : [],
        }
    }
    verMas(){
        this.setState({
            verMas: !this.state.verMas
        })
    }
    render(){
         return(
        <article className="single-card-movie">
                <img src={"https://image.tmdb.org/t/p/w342/" + this.props.imagen} className="card-img-top"
                    alt={this.props.titulo}/>

                <div className="cardBody">
                    <h5 className="card-title">{this.props.titulo}</h5>
                    <p className="card-text">{this.props.descripcion}</p>
                    <Link to={`/pelicula/${this.props.id}`}>
                    <button className="btn btn-primary">Ver Más</button>
                    </Link>
                    <a href="" className="btn alert-primary">🩶</a>
                </div>
            </article>
    )
    }
}
export default CardMovie;