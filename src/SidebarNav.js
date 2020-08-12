import React from 'react';
import {useHistory} from 'react-router-dom';

import './SidebarNav.css';
import db from './Firebase';

function SidebarNav({Icon , title , id, addChannelOption}) {
    const history = useHistory();

    const selectChannel = () => {
        if (id) {
            history.push(`/room/${id}`)
        }else {
            history.push(title)
        }
    }

    const addChannel = () => {
        const channel = prompt('Add the channel here by name');

        db.collection('rooms').add({
            name : channel,
        })
    }


    return (
        <div className="sidebarNav" onClick={addChannelOption ? addChannel : selectChannel}>
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
