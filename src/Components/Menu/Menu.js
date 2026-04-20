import React from "react";
import { Link } from "react-router-dom";

function Menu(props){
    return(
        <li className="nav-item">
            <Link className="nav-link" to = {props.element.ruta} >{props.element.nombre}</Link>
        </li>
    )
}

export default Menu;