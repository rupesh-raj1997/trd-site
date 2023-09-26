import React from "react";

const SidebarItem = ({ name, src, alt, isSelected }) => {
    return (
        <div className={`sidebar-item ${isSelected ? 'selected' : ''}`}>
            <img id={name} className="sidebar-item-icon" src={src} alt={alt} />
            <label for={name} className="sidebar-item-label">{name}</label>
        </div>
    )
}

export default SidebarItem;