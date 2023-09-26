import React from "react";
import './TextInput.scss';

const TextInput = ({inputName, placeholder }) => (
    <div className="">
        <label for={inputName}>{inputName}</label>
        <input id={inputName} placeholder={placeholder} />
    </div>
)

export default TextInput;
