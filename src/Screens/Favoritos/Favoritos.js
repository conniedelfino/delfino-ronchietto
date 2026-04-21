import react, {Component} from "react";

class Favoritos extends component{
    contructor(props){
        super(props);
        this.state = {
            favoritas:[]
        }
    }
    componentDidMount(){
        let storage = localStorage.getItem("favoritos");
        if (storage !== null){
            this.setState({
                favoritas: JSON.parse(storage)
            })
        }
    }
    render(){
        return(
            <>
            <h2>Favoritos</h2>
            {this.state.favoritos.length === 0 ? (
                <p>No hay nada guardado en favoritas</p>
            ) : (
                this.state.favoritoçs.map((id) => <p key={id}>{id}</p>)
            )}
            </>
        )
    }
}

export default Favoritos;
