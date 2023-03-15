import { SignInPage } from "./pages/SignInPage";
import { ChatPage } from "./pages/ChatPage";
import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";



function App() {
  const context = useContext(AppContext);

  return (
    <div>
      {!context.isSignedIn && <SignInPage/>}
      {context.isSignedIn && <ChatPage />}
    </div>
  );
}

export default App;
