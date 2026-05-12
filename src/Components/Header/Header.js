import React, { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Header(props) {
  let usuarioLogeado = cookies.get("auth-user");
  const [usuariologueado, setUsuarioLogeado] = useState([]);
  
  const [elements, setElements] = useState([
    { nombre: "Home", ruta: "/" },
    { nombre: "Películas", ruta: "/peliculas" },
    { nombre: "Series", ruta: "/series" }]);

  useEffect(()=> {}, [])
  

  if (usuarioLogeado){
    elements.push({nombre: "Favoritos", ruta: "/favoritos"});
  }
  else{
    elements.push({nombre: "Login", ruta: "/login"});
    elements.push({nombre: "Register", ruta: "/register"});
  }

  return (
    <React.Fragment>
      <img src="/img/fotocine.png" alt="Logo" className="logo"/>

      <h1>UdeSA Movies</h1>

      <nav>
        <ul className="nav nav-tabs my-4">
          {elements.map((element, idx) => (
            <Menu key={idx} element={element} />
          ))}
        </ul>
      </nav>

    </React.Fragment>
  );
}

export default Header;