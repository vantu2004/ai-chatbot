import React from "react";
import styles from "./App.module.css";
import { Chat } from "./components/chat/Chat";
import { Controls } from "./components/controls/Controls";

function App() {
  const [messages, setMessages] = React.useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { role: "user", content: message }]);
  };

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src="/chat-bot.png" className={styles.Logo} alt="logo" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>

      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>

      <Controls onSend={handleSendMessage} />
    </div>
  );
}

export default App;
