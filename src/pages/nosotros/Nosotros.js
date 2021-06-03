import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-simple.JPG";
import DeRosaLogo from "../../assets/logo-estudio-de-rosa.JPG";
import "./Nosotros.css";
function Nosotros() {
  return (
    <div className="nosotros">
      <nav className="nosotros__nav">
        <div className="nosotros__navContainer">
          <Link to="/">
            <img src={Logo} alt="Nokk Logo" />
          </Link>
        </div>
      </nav>
      <div className="nosotros__container">
        <div className="nosotros__title">
          <h1>Conocenos</h1>
          <h3>En Nokk trabajamos en conjunto con Estudio De Rosa.</h3>
        </div>
        <div className="nosotros__body">
          <div className="nosotros__bodyContent nosotros__bodyContent1">
            <div className="nosotros__bodyContentTitle">
              <h5>Estudio De Rosa</h5>
              <div className="nosotros__bodyLine"></div>
            </div>
            <div className="nosotros__bodyContentDetail">
              <p>
                Con más de 30 años de trayectoria en la industria, Estudio De
                Rosa se encarga de la elaboración del proyecto a construir.
              </p>
              <a
                href="https://www.derosa.com.ar"
                target="_blank"
                rel="noreferrer"
              >
                www.derosa.com.ar
              </a>
            </div>
            <div className="nosotros__bodyContentLogo">
              <img src={DeRosaLogo} alt="Estudio De Rosa logo" />
            </div>
          </div>

          <div className="nosotros__bodyContent nosotros__bodyContent2">
            <div className="nosotros__reverseContent">
              <div className="nosotros__bodyContentLogo nosotros__bodyLogoRight">
                <img src={Logo} alt="Nokk logo" />
              </div>
              <div className="nosotros__bodyContentTitle nosotros__bodyTitleRight">
                <div className="nosotros__bodyLine"></div>
                <h5>Nokk</h5>
              </div>
            </div>
            <div className="nosotros__bodyContentDetail">
              <p>
                Nosotros construimos el proyecto y hacemos el seguimiento
                integral de la obra.
              </p>
            </div>
          </div>
        </div>
        <div className="nosotros__bottom">
          <p>¿Ya tenés un proyecto? Traelo y nosotros lo adaptamos</p>
          <Link to="/contacto" className="button button__black">
            Contactanos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
