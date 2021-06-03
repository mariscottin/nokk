import React from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <ul className="sidebar__container">
        <li>
          <Link to="/nosotros" onClick={() => props.toggleSidebar()}>
            Nosotros
          </Link>
        </li>
        <li>
          <Link to="/especificaciones" onClick={() => props.toggleSidebar()}>
            Especificaciones
          </Link>
        </li>
        <li>
          <Link to="/contacto" onClick={() => props.toggleSidebar()}>
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
