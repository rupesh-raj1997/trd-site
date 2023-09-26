import React from "react";
import './Button.scss';


const SecondaryButton = ({label}) => {
    return (
        <button className="secondary-button">
            {label}
        </button>
    )
}

export default SecondaryButton;