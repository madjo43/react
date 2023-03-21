import { Message } from "../components/Message";
import { MessageForm } from "../components/MessageForm";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Navigate } from "react-router-dom";


export function ChatPage() {
    const [messages, setMessages] = useState([]);
    const context = useContext(AppContext);
    

   function handleSubmit (message) {
       setMessages ([...messages, message]);

   }

    const messageComponents = messages.map((message) => {
        return   <Message key={message.id} avatarIndex={message.author.avatarIndex} author={message.author.username} text={message.text} />;
    });
    
    if (!context.isSignedIn) {
        return <Navigate to='/' replace />;
    } 
    return (
        <div>
            Chat page
            <div className="message-list">
                {messageComponents}
            </div>
           <MessageForm onSubmit={handleSubmit} username={context.username} avatarIndex={context.avatarIndex} />
        </div>
    );
};