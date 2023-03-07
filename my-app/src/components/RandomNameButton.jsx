
import { getRandomName } from "../library/random";
import { Button } from "./Button";


export function RandomNameButton(props) {
   
    function handleClick(event) {
        props.onRandomName(getRandomName());
    }


    return (
        <Button type="button" onClick={handleClick} label="Get random name"/>
    )
}