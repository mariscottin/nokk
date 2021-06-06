import React from "react";
import Logo from "../assets/logo-horizontal.png";
import { Link } from "react-router-dom";
import "./EmptyNavigation.css";
function EmptyNavigation() {
  return (
    <div className="emptyNavigation">
      <div className="emptyNavigation__coontainer">
        <Link to="/">
          <img src={Logo} alt="Nokk Logo" />
        </Link>
      </div>
    </div>
  );
}

export default EmptyNavigation;
