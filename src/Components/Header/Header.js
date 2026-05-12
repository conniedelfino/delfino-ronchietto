import React, { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Header(props) {
  const [usuariologueado, setUsuarioLogeado] = useState([]);
  
    useEffect(()=> {
      let usuarioLogeado = cookies.get("auth-user");

      let elementosBase = [
        { nombre: "Home", ruta: "/" },
    { nombre: "Películas", ruta: "/peliculas" },
    { nombre: "Series", ruta: "/series" }
      ];

      if (usuarioLogeado){
    elements.push({nombre: "Favoritos", ruta: "/favoritos"});
  }
  else{
    elements.push({nombre: "Login", ruta: "/login"});
    elements.push({nombre: "Register", ruta: "/register"});
  }

  setElements(elementosBase);


    }, [])

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