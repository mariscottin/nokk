import React, { useState } from "react";
import Logo from "../assets/logo-white.png";
import BackDrop from "./Backdrop";
import Sidebar from "./Sidebar";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";

import "./Navigation.css";

function Navigation() {
  const [sidebarWidth, setSideBarWidth] = useState(0);
  const [hamburgerMenuX, setHamburgerMenuX] = useState(false);

  const toggleSidebar = () => {
    if (sidebarWidth === 0) {
      setSideBarWidth(260);
      document.body.classList.add("sidebar__open");
    } else {
      setSideBarWidth(0);
      document.body.classList.remove("sidebar__open");
    }

    !hamburgerMenuX ? setHamburgerMenuX(true) : setHamburgerMenuX(false);
  };

  return (
    <>
      {sidebarWidth > 0 && <BackDrop onClick={toggleSidebar} />}
      <div className="navigation">
        <div className="navigation__container">
          <div className="navigation__logo-container">
            <Scroll
              activeClass="active"
              to="heroSection"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
            >
              <Link to="/">
                <img src={Logo} alt="Nokk-logo" />
              </Link>
            </Scroll>
          </div>
          <div className="navigation__nav">
            <ul>
              <li>
                <Link to="/nosotros">Nosotros</Link>
              </li>
              <li>
                <Link to="/especificaciones">Especificaciones</Link>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
          <div className="navigation__mobile">
            <div
              className={`hamburger-menu ${hamburgerMenuX && "active"}`}
              onClick={toggleSidebar}
            >
              <span
                className={`top-bun ${hamburgerMenuX && "black-bun"}`}
              ></span>
              <span
                className={`center-meat ${hamburgerMenuX && "black-bun"}`}
              ></span>
              <span
                className={`bottom-bun ${hamburgerMenuX && "black-bun"}`}
              ></span>
            </div>
            <div
              className="mobile-navigation__sidebar"
              style={{ width: sidebarWidth }}
            >
              <Sidebar active={hamburgerMenuX} toggleSidebar={toggleSidebar} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
