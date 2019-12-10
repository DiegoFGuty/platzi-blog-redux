import React from "react";
import { Link } from "react-router-dom";

const Menu = () => (
  <nav id="menu">
    <Link to="/">Usuarios</Link>
    <Link to="/Tareas">Tareas</Link>
  </nav>
);

export default Menu;
