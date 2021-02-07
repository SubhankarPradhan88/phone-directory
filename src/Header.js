import React from 'react';
import './App.css';

export const Header = function(props) {
    return (
        <div className="header">{props.heading}</div>
    )
}

export default Header;