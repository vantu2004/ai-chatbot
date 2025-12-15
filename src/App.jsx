import React from "react";
import styles from "./App.module.css";
import { Chat } from "./components/chat/Chat";
import { Controls } from "./components/controls/Controls";
import { GoogleAiAssistant } from "./assistants/googleAi";
import { OpenAiAssistant } from "./assistants/openAi";
import { DeepseekAiAssistant } from "./assistants/deepseekAi";
import { Loader } from "./components/loader/Loader";

function App() {
  const assistant = new GoogleAiAssistant();
  const [messages, setMessages] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [isStreaming, setIsStreaming] = React.useState(false);

  const handleAddMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  function handleUpdateLastMessage(content) {
    setMessages((prevMessages) =>
      prevMessages.map((message, index) =>
        index === prevMessages.length - 1
          ? { ...message, content: `${message.content}${content}` }
          : message
      )
    );
  }

  const handleSendMessage = async (message) => {
    setLoading(true);

    handleAddMessage({ role: "user", content: message });

    try {
      const response = await assistant.sendMessageStream(message);
      let isFirstChunk = false;

      for await (const chunk of response) {
        if (!isFirstChunk) {
          isFirstChunk = true;
          setLoading(false);
          setIsStreaming(true);
          handleAddMessage({ role: "assistant", content: "" });
        }

        handleUpdateLastMessage(chunk);
      }
    } catch (error) {
      handleAddMessage({
        role: "system",
        content: error || "Something went wrong",
      });
      setLoading(false);
      console.error(error);
    } finally {
      setIsStreaming(false);
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

      <Controls
        isDisabled={loading || isStreaming}
        onSend={handleSendMessage}
      />
    </div>
  );
}

export default App;
