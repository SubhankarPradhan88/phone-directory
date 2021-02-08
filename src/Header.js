import React from 'react';
import './common/common.css';

export const Header = function(props) {
    return (
        <div className="header">{props.heading}</div>
    )
}

export default Header;