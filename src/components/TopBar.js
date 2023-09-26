import React from "react";
import './TopBar.scss';

const TopBar = ({name}) => {
    return (
        <div className="topbar-wrapper">
            <h1 className="topbar-name">{name}</h1>
        </div>
    )
}

export default TopBar;