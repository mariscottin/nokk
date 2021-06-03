import React from "react";
import { Link } from "react-router-dom";
import EspImg from "../../assets/especificaciones.jpg";
import Logo from "../../assets/logo-white.png";
import "./Especificaciones.css";
function Especificaciones() {
  return (
    <div className="especificaciones">
      <nav className="especificaciones__nav">
        <div className="especificaciones__navContainer">
          <Link to="/">
            <img src={Logo} alt="Nokk Logo" />
          </Link>
        </div>
      </nav>
      <div className="especificaciones__container">
        <div className="especificaciones__left">
          <img src={EspImg} alt="Paneles SIP" />
        </div>
        <div className="especificaciones__right">
          <div className="especificaciones__rightContainer">
            <h1>Especificaciones</h1>
            <div className="especificaciones__item">
              <div className="especificaciones__line"></div>
              <h3>Composición</h3>
              <ul>
                <li>OSB + EPS + OSB</li>
                <li>OSB + EPS + Plakimbre</li>
              </ul>
            </div>
            <div className="especificaciones__item">
              <div className="especificaciones__line"></div>
              <h3>Medidas</h3>
              <p>2,44m x 1,22m</p>
            </div>
            <div className="especificaciones__item">
              <div className="especificaciones__line"></div>
              <h3>Núcleo EPS</h3>
              <p>90mm ó 70mm</p>
            </div>
            <div className="especificaciones__item">
              <div className="especificaciones__line"></div>
              <h3>Peso</h3>
              <p>60kg</p>
            </div>
            <div className="especificaciones__item">
              <div className="especificaciones__line"></div>
              <h3>Usos</h3>
              <p>Paredes, pisos, techos.</p>
            </div>
            <div className="especificaciones__item">
              <div className="especificaciones__line"></div>
              <h3>Revestimientos</h3>
              <p>Revestimiento plástico, pintura, madera, chapa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Especificaciones;
