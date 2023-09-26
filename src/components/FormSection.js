import React from "react";
import './FormSection.scss';

const FormSection = ({ name, details }) => (
    <div className="collapse-section">
        <div>
            <h2 className="section-name">{name}</h2>
            <p className="section-details">{details}</p>
        </div>
        <img className="section-open" src="./assets/down_arrow.svg" />
    </div>
)

export default FormSection;