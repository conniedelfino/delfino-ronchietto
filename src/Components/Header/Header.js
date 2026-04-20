import React from "react";
import Menu from "../Menu/Menu";
import Cokkies from "universal-cookie";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Header() {
  let usuarioLogeado = cookies.get("auth-user");
  
  let elements = [
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