import React, { useState } from 'react';
import Logo from '../assets/logo-white.png';

import BackDrop from './Backdrop';
import Sidebar from './Sidebar';

import './Navigation.css';

function Navigation() {
    const [sidebarWidth, setSideBarWidth] = useState(0);
    const [hamburgerMenuX, setHamburgerMenuX] = useState(false);

    const toggleSidebar = () => {
        if (sidebarWidth === 0) {
            setSideBarWidth(260);
            document.body.classList.add('sidebar__open');
        } else {
            setSideBarWidth(0);
            document.body.classList.remove('sidebar__open');
        }

        !hamburgerMenuX ? setHamburgerMenuX(true) : setHamburgerMenuX(false);
    }

    return (
        <>
        {sidebarWidth > 0 && <BackDrop onClick={toggleSidebar} />}
        <div className="navigation">
            <div className="navigation__container">
                <div className="navigation__logo-container">
                    <img src={Logo} alt="Nokk-logo" />
                </div>
                <div className="navigation__nav">
                    <ul>
                        <li>Nosotros</li>
                        <li>Partners</li>
                        <li>Contacto</li>
                    </ul>
                </div>
                <div className="navigation__mobile">
                    <div className={`hamburger-menu ${hamburgerMenuX && "active"}`} onClick={toggleSidebar}>
                        <span className={`top-bun ${hamburgerMenuX && "black-bun"}`}></span>
                        <span className={`center-meat ${hamburgerMenuX && "black-bun"}`}></span>
                        <span className={`bottom-bun ${hamburgerMenuX && "black-bun"}`}></span>
                    </div>
                    <div className="mobile-navigation__sidebar" style={{ width: sidebarWidth }}>
                        <Sidebar active={hamburgerMenuX} toggleSidebar={toggleSidebar} />
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Navigation;