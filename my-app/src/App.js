import { SignInPage } from "./pages/SignInPage";
import { ChatPage } from "./pages/ChatPage";
import { useState } from "react";
import { Counter } from "./components/Counter";



function App() {
  const [ username, setUsername] = useState('');
  const [avatarIndex, setAvatarIndex] = useState(0);

  function handleSubmit(user){
    setUsername(user.username);
    setAvatarIndex(user.avatarIndex);
  }
  return (
    <div>
      <Counter  initialValue={0} step={1.2323} precision={2}/>
      
      {username === '' && <SignInPage onSubmit={handleSubmit}/>}
      {username !== '' && <ChatPage username={username} avatarIndex={avatarIndex}  />}
    </div>
  );
}

export default App;
