import React from 'react';

import './SidebarNav.css';

function SidebarNav({Icon , title}) {
    return (
        <div className="sidebarNav">
            {Icon && <Icon className="sidebarNav__icon" />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
            <h3><span className="sidebarNav__hash">#</span>{title}</h3>
            )}
        </div>
    )
}

export default SidebarNav
