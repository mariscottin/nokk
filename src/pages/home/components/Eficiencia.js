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
              Los paneles de construcción SIP que utilizamos en Nokk preservan
              la energía, ahorrando más del 60%, solo por la conservación del
              calor.
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
