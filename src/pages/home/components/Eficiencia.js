import React from "react";
import { Link } from "react-router-dom";
import "./Eficiencia.css";

function Eficiencia({ id }) {
  return (
    <div className="eficiencia" id={id}>
      <div className="eficiencia__top">
        <div className="eficiencia__topContainer"></div>
      </div>
      <div className="eficiencia__bottom">
        <div className="eficiencia__bottomContainer">
          <div className="eficiencia__bottomColumn eficiencia__bottomCol1">
            <h4 className="eficiencia__category">Ventajas</h4>
            <h1 className="eficiencia__title">Eficiencia Energética</h1>
          </div>
          <div className="eficiencia__bottomColumn eficiencia__bottomCol2">
            <h3 className="eficiencia__body">
              Gracias a la conservación del calor de los paneles SIP, se genera
              un ahorro energético superior al 60%.
            </h3>
            <h3 className="eficiencia__body">
              Imagen ilustrativa del espesor que necesita cada material para
              igualar la eficiencia de un panel SIP.
            </h3>
          </div>
        </div>
        <div className="eficiencia__buttonContainer">
          <Link
            to="/contacto"
            className="button button__black eficiencia__button"
          >
            CONTACTANOS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Eficiencia;
