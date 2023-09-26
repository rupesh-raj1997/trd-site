import React from "react";
import './Button.scss';


const PrimaryButton = ({label}) => {
    return (
        <button className="primary-button">
            {label}
        </button>
    )
}

export default PrimaryButton;