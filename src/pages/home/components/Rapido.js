import React from "react";
import { Link } from "react-router-dom";
import "./Rapido.css";
function Rapido(props) {
  return (
    <div className="rapido" id={props.id}>
      <div className="rapido__container">
        <div className="rapido__left">
          <div className="rapido__leftContainer">
            <div className="rapido__leftTop">
              <h4 className="rapido__category">Ventajas</h4>
              <h1 className="rapido__title">Velocidad</h1>
              <p className="rapido__body">
                La rápida instalación de los paneles SIP permite una reducción
                de hasta 60% en los tiempos de construcción de obra gris vs. el
                método tradicional.
              </p>
            </div>
            <div className="rapido__leftBottom">
              <Link
                to="/contacto"
                className="button button__black rapido__button"
              >
                Contactanos
              </Link>
            </div>
          </div>
        </div>
        <div className="rapido__right"></div>
      </div>
    </div>
  );
}

export default Rapido;
