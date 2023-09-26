import React from "react";

const SubSidebarItem = ({ name, isSelected }) => {
    return (
        <div className={`subsidebar-item ${isSelected ? 'selected' : ''}`}>
            <label for={name} className="subsidebar-item-label">{name}</label>
        </div>
    )
}

export default SubSidebarItem;