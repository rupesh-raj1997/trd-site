import React from "react";
import './FormComponent.scss';
import FormSection from './FormSection';
import './FormSection.scss';
import SecondaryButton from "./Buttons/SecondaryButton";
import PrimaryButton from "./Buttons/PrimaryButton";
import TextInput from "./FormInputs/TextInput";

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
    },
]


const FormComponent = () => {
    return (
        <div className="form-wrapper">
            <div className="form-label">
                <div className="collapse-section">
                    <div>
                        <h2 className="section-name">Details</h2>
                        <p className="section-details">Page to configure all the company details</p>
                    </div>
                    <div className="section-actions">
                        <SecondaryButton label="Bulk Upload"></SecondaryButton>
                        <PrimaryButton label="Save"></PrimaryButton>
                        <img className="section-open" src="./assets/down_arrow.svg" />
                    </div>
                </div>
            </div>

            <form className="form-content">
                <TextInput inputName="Org Id" placeholder="Enter Org ID"></TextInput>
            </form>


            <div className="sections-wrapper">
                {sections.map(section => <FormSection {...section} />)}
            </div>
        </div>
    )
}

export default FormComponent;