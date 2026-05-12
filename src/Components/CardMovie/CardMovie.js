import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
{/* 
import Cookies from "universal-cookie";

const cookies = new Cookies();
*/}

function CardMovie(props){

    const [verMas, setVerMas] = useState(false)
    const [esFavorito, setEsFavorito] = useState(false)

    useEffect(
        ()=> (
            let favoritos = JSON.parse(localStorage.getItem("favoritos"))
            if(!favoritos){
                favoritos = []
            }
            let filtrados = favoritos.filter(fav => 
                fav.id === this.props.id &&
                fav.tipo === this.props.tipo
            )
            if (filtrados.length > 0){
                this.setState({esFavorito: true})
            }
        )
    )

    function verMas(){
        setVerMas(!verMas)
    }

    function agregarFavorito(){
        if (cookieStore.get("user-auth-cookie") === undefined){
            props.history.push("/Registro")
        }
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