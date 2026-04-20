import React, {Component} from "react";

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {busqueda: ""};
    }

    evitarSubmit(event){
        event.preventDefault();
    }

    controlarInput(event){
        this.setState({
            busqueda: event.target.value
        });
    }

render(){
    return(
        <form onSubmit={(event)=> this.evitarSubmit(event)} className="search-form">
            <div>
                <input type="text" name="busqueda" value={this.state.busqueda} onChange={(event)=> this.controlarInput(event)} placeholder="Buscar..." />
            </div>

            <button type="submit" className="btn-success btn-sm">buscar</button>
        </form>
    );
}
}

export default Search;