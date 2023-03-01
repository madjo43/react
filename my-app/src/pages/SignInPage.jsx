import { useState } from "react";
import { InputFormField } from "../components/InputFormField";
import { SubmitFormField } from "../components/SubmitFormField";

export function SignInPage(props) {
    const [ formState, setFormState ] = useState ('');

    function handleSubmit (event){
        event.preventDefault();
        props.onSubmit(formState);
    }

    function handleUserNameChange(value) {
        setFormState(value);
    }


    return (
        <div className="sign-in-page">
            <div className="card">
                <form className="sign-in-form" onSubmit={handleSubmit}>
                   <InputFormField label="Username"  type="text"  onChange={handleUserNameChange} />
                   <SubmitFormField />
                </form>
            </div>
        </div>
    );
};