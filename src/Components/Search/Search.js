import React, {Component} from "react";
import {withRouter} from "react-router-dom";

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {busqueda: ""};
    }
    controlarInput(event){
        this.setState({
            busqueda: event.target.value
        });
    }

    enviarForm(event){
        event.preventDefault();
        this.props.history.push("/resultados?busqueda")
    }

render(){
    return(
        <form onSubmit={(event)=> this.enviarForm(event)} className="search-form">
            <div>
                <input type="text" name="busqueda" value={this.state.busqueda} onChange={(event)=> this.controlarInput(event)} placeholder="Buscar..." />
            </div>

            <button type="submit" className="btn-success btn-sm">Buscar</button>
        </form>
    );
}
}

export default withRouter (Search);