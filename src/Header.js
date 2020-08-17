import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';

import './Header.css';
import { useStateValue } from './StateProvider';

function Header() {
    const [{user}] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <Avatar 
                src = {user?.photoURL}
                alt = {user?.displayName} />
                <AccessTimeIcon />
                {/* clock icon */}
            </div>
            <div className="header__search">
                <SearchIcon />
                {/* search icon */}
                <input size="40" placeholder="Search the programmer here" />
            </div>
            <div className="header__right">
                <HelpIcon />
                {/* help icon */}
            </div>




        </div>
    )
}

export default Header
