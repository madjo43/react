import { SignInPage } from "./pages/SignInPage";
import { ChatPage } from "./pages/ChatPage";
import { useState } from "react";

function App() {
  const [ username, setUsername] = useState('')

  function handleSubmit(username){
    setUsername(username)
  }
  return (
    <div>
      {username === '' && <SignInPage onSubmit={handleSubmit}/>}
      {username !== '' && <ChatPage />}
    </div>
  );
}

export default App;
