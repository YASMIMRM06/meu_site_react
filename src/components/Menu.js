import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav id="menu">
      <Link to="/">Home</Link>
      <Link to="/historia">História</Link>
      <Link to="/galeria">Galeria</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  );
}

export default Menu;
