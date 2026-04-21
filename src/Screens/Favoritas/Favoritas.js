import react, {Component} from "react";

class Favoritas extends component{
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
            <h2>Favoritas</h2>
            {this.state.favoritas.length === 0 ? (
                <p>No hay nada guardado en favoritas</p>
            ) : (
                this.state.favoritas.map((id) => <p key={id}>{id}</p>)
            )}
            </>
        )
    }
}

export default Favoritas
