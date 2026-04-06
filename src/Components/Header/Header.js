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
    <header>
      <div className="logo-container">
        <img className="logo" src="/img/fotocine.png" alt="Logo" />
      </div>
      <nav>
        <ul className="nav nav-tabs my-4">
          {elements.map((element, idx) => (
            <Menu key={idx} elements={element} />
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;