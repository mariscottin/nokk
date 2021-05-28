import React from "react";

import "./Solidez.css";

function Solidez({ id }) {
  return (
    <div className="solidez" id={id}>
      <div className="solidez__container">
        <div className="solidez__left">
          <div className="solidez__leftContainer">
            <div className="solidez__leftTop">
              <h4 className="solidez__category">Ventajas</h4>
              <h1 className="solidez__title">Solidez</h1>
              <p className="solidez__body">
                La estructura de los paneles permite que sean macizos y resistan
                fuerzas de hasta 18 toneladas.
              </p>
            </div>
            <div className="solidez__leftBottom">
              <button className="button__black solidez__button">
                Contactanos
              </button>
            </div>
          </div>
        </div>
        <div className="solidez__right"></div>
      </div>
    </div>
  );
}

export default Solidez;
