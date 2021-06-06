import React from "react";
import { Link } from "react-router-dom";
import "./Sustentable.css";
function Sustentable(props) {
  return (
    <div className="sustentable" id={props.id}>
      <div className="sustentable__container">
        <div className="sustentable__left">
          <div className="sustentable__leftContainer">
            <div className="sustentable__leftTop">
              <h4 className="sustentable__category">Ventajas</h4>
              <h1 className="sustentable__title">Sustentabilidad</h1>
              <ul className="sustentable__body">
                <li>0 consumo de agua durante la obra gris.</li>
                <li>Madera OSB de bosques reforestados.</li>
                <li>Ahorro energético por la eficiencia de los paneles.</li>
                <li>Reciclaje de sobrantes de obra.</li>
              </ul>
            </div>
            <div className="sustentable__leftBottom">
              <Link
                to="/contacto"
                className="button button__black sustentable__button"
              >
                Contactanos
              </Link>
            </div>
          </div>
        </div>
        <div className="sustentable__right"></div>
      </div>
    </div>
  );
}

export default Sustentable;
