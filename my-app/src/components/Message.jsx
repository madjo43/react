import { avatarImages } from "../library/avatar";


export function Message (props) {

    return (
        <div className="message">
            <img width="100px" height="100px" src={avatarImages[props.avatarIndex]} alt={props.author} />
            <div className="message-author">{props.author}</div>
            <div className="message-text">{props.text}</div>
        </div>
    );
}