import React from "react";
import './TextInput.scss';

const TextInput = ({inputName, placeholder }) => (
    <div className="text-input-wrapper">
        <label for={inputName}>{inputName}</label>
        <input id={inputName} placeholder={placeholder} />
    </div>
)

export default TextInput;
