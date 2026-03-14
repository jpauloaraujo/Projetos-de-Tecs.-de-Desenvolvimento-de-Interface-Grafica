import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="page-container">
    <h1>404 - Rota Inválida</h1>
    <p>A página que você está procurando não existe.</p>
    <Link to="/">Voltar para o Início</Link>
  </div>
);

export default NotFound;
