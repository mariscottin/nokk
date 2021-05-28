import React from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <ul className="sidebar__container">
        <li>Nosotros</li>
        <li>Especificaciones</li>
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
