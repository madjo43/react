import { FormField } from "./FormField";
import { useState } from "react";

const avatarImages = [ 
    '/avatar/0001Bulbasaur.png',
    '/avatar/pink.png',
    '/avatar/Pikachu.png'
];

export function AvatarFormField (props) {
    const [index, setIndex] = useState(0);
    
    props.onChange(index);

    function handleNextClick () {
        if(index >= avatarImages.length -1) {
            setIndex(0);
        } else {
        setIndex(index + 1);
        }
    }
    function handlePreviusClick () {
        if(index <= 0) {
            setIndex(avatarImages.length -1);
            
        } else {
        setIndex(index - 1);
        }
    }
    return(
        <FormField>
            <button type="button" onClick={handlePreviusClick}>Previus</button>
            <img width="100px" height="100px" src={avatarImages[index]} alt={index}/>
            <button type="button" onClick={handleNextClick}>Next</button>
        </FormField>
    )
}