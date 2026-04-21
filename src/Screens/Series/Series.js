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
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`)
        
    }






}
function Series(){
    return(
        <>
        <SeccionSeriesPopulares/>
        </>
    )
}

export default Series