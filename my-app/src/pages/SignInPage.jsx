import { useState } from "react";
import { AvatarFormField } from "../components/AvatarFormField";
import { Button } from "../components/Button";
import { FormField } from "../components/FormField";
import { InputFormField } from "../components/InputFormField";
import { RandomNameButton } from "../components/RandomNameButton";
import { getRandomName } from "../library/random";


export function SignInPage(props) {
    const [ formState, setFormState ] = useState (getRandomName());
    const [avatar, setAvatar] = useState('');

    function handleSubmit (event){
        event.preventDefault();
        props.onSubmit({
            username: formState,
            avatarIndex: avatar,
        });
    }

    function handleUserNameChange(value) {
        setFormState(value);
    }
    function handleAvatarChange (value) {
        setAvatar(value);

    }
    console.log(avatar);
    

    return (
        <div className="sign-in-page">
            <div className="card">
                <form className="sign-in-form" onSubmit={handleSubmit}>
                    <AvatarFormField  onChange={handleAvatarChange}/>
                   <InputFormField label="Username"  type="text"  onChange={handleUserNameChange} value={formState} />
                   <FormField>
                        <RandomNameButton onRandomName={handleUserNameChange} />
                   </FormField>
                   <FormField>
                        <Button type="submit" label="Sign in" />
                   </FormField>
                </form>
            </div>
        </div>
    );
};