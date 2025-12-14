import React from "react";
import styles from "./App.module.css";
import { Chat } from "./components/chat/Chat";
import { Controls } from "./components/controls/Controls";
import { GoogleAiAssistant } from "./assistants/googleAi";
import { OpenAiAssistant } from "./assistants/openAi";
import { Loader } from "./components/loader/Loader";

function App() {
  const assistant = new OpenAiAssistant();
  const [messages, setMessages] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleAddMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const handleSendMessage = async (message) => {
    setLoading(true);

    handleAddMessage({ role: "user", content: message });

    try {
      const response = await assistant.sendMessage(message);

      handleAddMessage({ role: "assistant", content: response });
    } catch (error) {
      handleAddMessage({ role: "system", content: "Something went wrong" });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.App}>
      {loading && <Loader />}

      <header className={styles.Header}>
        <img src="/chat-bot.png" className={styles.Logo} alt="logo" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>

      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>

      <Controls isDisabled={loading} onSend={handleSendMessage} />
    </div>
  );
}

export default App;
