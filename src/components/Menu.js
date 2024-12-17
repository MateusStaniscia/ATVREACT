import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul id="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/History">História</Link>
      </li>
      <li>
        <Link to="/Gallery">Galeria</Link>
      </li>
      <li>
        <Link to="/Contact">Contato</Link>
      </li>
    </ul>
  );
};

export default Menu;
