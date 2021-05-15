import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faLightbulb, faWeightHanging, faTachometerAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './Home.css';
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__container-heroText">
                    <h1>Construccion Eficiente con Paneles SIP</h1>
                </div>
                <div className="home__container-bottom">
                    <div className="home__container-bottom-row1">
                        <div className="home__container-bottom-icon">
                            <FontAwesomeIcon icon={faLightbulb} />
                            <p>Eficiente</p>
                            {/* <p>Energética</p> */}
                        </div>
                        <div className="home__container-bottom-icon">
                            <FontAwesomeIcon icon={faWeightHanging} />
                            <p>Sólido</p>
                        </div>
                        <div className="home__container-bottom-icon">
                            <FontAwesomeIcon icon={faTachometerAlt} />
                            <p>Rápido</p>
                        </div>
                        <div className="home__container-bottom-icon">
                            <FontAwesomeIcon icon={faSeedling} />
                            <p>Sustentable</p>
                        </div>
                        <div className="home__container-bottom-button">
                            <button>Contactanos</button>
                        </div>
                    </div>
                    <div className="home__container-bottom-row2">
                        <FontAwesomeIcon icon={faChevronDown} className="bounce-arrow"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

