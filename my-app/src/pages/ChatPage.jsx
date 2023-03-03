import { InputFormField } from "../components/InputFormField";
import { SubmitFormField } from "../components/SubmitFormField";
import { Message } from "../components/Message";

export function ChatPage() {
    return (
        <div>
            Chat page
            <div className="message-list">
                <Message author="Mladen" text="Lorem ipsum" />
                <Message author="Udenko" text="Dolor sit amet" />
            </div>
            <form>
                <InputFormField />
                <SubmitFormField label="Send" />
            </form>
        </div>
    );
};