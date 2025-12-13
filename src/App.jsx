import React from "react";
import styles from "./App.module.css";
import { Chat } from "./components/chat/Chat";
import { Controls } from "./components/controls/Controls";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GOOGLE_AI_API_KEY });
const MODEL = "gemini-2.5-flash";

function App() {
  const [messages, setMessages] = React.useState([]);

  const handleAddMessage = (message) => {
    setMessages([...messages, message]);
  };

  const handleSendMessage = async (message) => {
    handleAddMessage({ role: "user", content: message });

    try {
      const response = await ai.models.generateContent({
        model: MODEL,
        contents: message,
      });

      handleAddMessage({ role: "assistant", content: response.text });
    } catch (error) {
      handleAddMessage({ role: "system", content: "Something went wrong" });
      console.log(error);
    }
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
