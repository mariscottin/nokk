import React from "react";
import Logo from "../assets/logo-horizontal.png";
import { Link } from "react-router-dom";
import "./EmptyNavigation.css";
function EmptyNavigation() {
  return (
    <div className="emptyNavigation">
      <Link to="/">
        <img src={Logo} alt="Nokk Logo" />
      </Link>
    </div>
  );
}

export default EmptyNavigation;
