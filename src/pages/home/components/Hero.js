import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faLightbulb,
  faWeightHanging,
  faTachometerAlt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

import "./Hero.css";
function Hero({ id }) {
  return (
    <div className="hero" id={id}>
      <div className="hero__container">
        <div className="hero__container-heroText">
          <h1>Construcción Eficiente con Paneles SIP</h1>
        </div>
        <div className="hero__container-bottom">
          <div className="hero__container-bottom-row1">
            <Scroll
              activeClass="active"
              to="eficienciaSection"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
            >
              <div className="hero__container-bottom-icon">
                <FontAwesomeIcon icon={faLightbulb} />
                <p>Eficiente</p>
              </div>
            </Scroll>
            <Scroll
              activeClass="active"
              to="solidezSection"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
            >
              <div className="hero__container-bottom-icon">
                <FontAwesomeIcon icon={faWeightHanging} />
                <p>Sólido</p>
              </div>
            </Scroll>
            <Scroll
              activeClass="active"
              to="rapidoSection"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
            >
              <div className="hero__container-bottom-icon">
                <FontAwesomeIcon icon={faTachometerAlt} />
                <p>Rápido</p>
              </div>
            </Scroll>
            <Scroll
              activeClass="active"
              to="sustentableSection"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
            >
              <div className="hero__container-bottom-icon">
                <FontAwesomeIcon icon={faSeedling} />
                <p>Sustentable</p>
              </div>
            </Scroll>
            <div className="hero__container-bottom-button">
              <Link to="/contacto" className="button button__white">
                Contactanos
              </Link>
            </div>
          </div>
          <div className="hero__container-bottom-row2">
            <Scroll
              activeClass="active"
              to="eficienciaSection"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
            >
              <FontAwesomeIcon icon={faChevronDown} className="bounce-arrow" />
            </Scroll>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
