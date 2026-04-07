import React from "react";
import Menu from "../Menu/Menu";

function Header() {
  let elements = [
    { nombre: "Home", ruta: "/" },
    { nombre: "Películas", ruta: "/peliculas" },
    { nombre: "Series", ruta: "/series" },
    { nombre: "Favoritas", ruta: "/favoritas" },
    { nombre: "Register", ruta: "/register" },
    { nombre: "Login", ruta: "/login" }
  ];

  return (
    <React.Fragment>
        <img src="/img/fotocine.png" alt="Logo" />
      

      <h1>UdeSA Movies</h1>

      <nav>
        <ul className="nav nav-tabs my-4">
          {elements.map((element, idx) => (
            <Menu key={idx} elements={element} />
          ))}
        </ul>
      </nav>

      <form className="search-form" action="results.html" method="get">
        <input type="text" name="searchData" placeholder="Buscar..." value=""/>
        <button type="submit" className="btn btn-success btn-sm">Buscar</button>
      </form>

    </React.Fragment>
  );
}

export default Header;