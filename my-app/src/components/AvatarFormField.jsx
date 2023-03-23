import { FormField } from "./FormField";
import { useEffect, useState } from "react";
import { avatarImages } from "../library/avatar"


export function AvatarFormField (props) {
    const [index, setIndex] = useState(0);

    useEffect(() =>{
        props.onChange(index);
    }, [index, props]);
    

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