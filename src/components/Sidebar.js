import React from 'react';

import './Sidebar.css';

const Sidebar = (props) => {
    return(
        
        <div className="sidebar">
            <ul className="sidebar__container">
                <li>
                    Nosotros
                </li>
                <li>
                    Partners
                </li>
                <li>
                    Contacto
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;