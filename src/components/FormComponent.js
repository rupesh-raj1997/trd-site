import React from "react";
import './FormComponent.scss';
import FormSection from './FormSection';

const sections = [
    {
        name: 'Lock Setup',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        name: 'Integration Info',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        name: 'AI Info',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },]


const FormComponent = () => {
    return (
        <div className="form-wrapper">
            <h1 className="topbar-name"></h1>

            <div className="sections-wrapper">
                {sections.map(section => <FormSection {...section} />)}
            </div>

        </div>
    )
}

export default FormComponent;