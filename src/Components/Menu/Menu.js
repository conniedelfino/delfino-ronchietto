import React from "react";
import { Link } from "react-router-dom";

function Menu(props){
    return(
        <li>
            <Link to = {props.elements.ruta} >{props.elements.nombre}</Link>
        </li>
    )
}

export default Menu;