import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="Navbar">
    <Link to="/">Início</Link>
    <Link to="/form">Pesquisa</Link>
    <Link to="/about">Sobre</Link>
  </nav>
);

export default Navbar;
