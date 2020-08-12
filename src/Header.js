import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';

import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar />
                <AccessTimeIcon />
                {/* clock icon */}
            </div>
            <div className="header__search">
                <SearchIcon />
                {/* search icon */}
                <input placeholder="Search the programmer here" />
            </div>
            <div className="header__right">
                <HelpIcon />
                {/* help icon */}
            </div>




        </div>
    )
}

export default Header
