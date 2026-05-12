import React, { useState, useEffect } from "react";
import {withRouter} from "react-router-dom";

function Search(props) {

    const [busqueda, setBusqueda] = useState("");

    function controlarInput(event) {
        setBusqueda(event.target.value);
    }

    function enviarForm(event) {
        event.preventDefault();
        props.history.push("/resultados?busqueda");
    }

    return(
        <form onSubmit={(event)=> this.enviarForm(event)} className="search-form">
            <div>
                <input type="text" name="busqueda" value={this.state.busqueda} onChange={(event)=> this.controlarInput(event)} placeholder="Buscar..." />
            </div>

            <button type="submit" className="btn-success btn-sm">Buscar</button>
        </form>
    );
}


export default withRouter (Search);