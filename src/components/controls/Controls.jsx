import React from "react";
import { Send } from "lucide-react";
import styles from "./Controls.module.css";

export function Controls({ onSend }) {
  const [content, setContent] = React.useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSend = () => {
    if (content.length > 0) {
      onSend(content);
      setContent("");
    }
  };

  const handlePressEnter = (e) => {
    if (e.key === "Enter" && e.shiftKey === false) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={styles.Controls}>
      <div className={styles.TextAreaContainer}>
        <textarea
          className={styles.TextArea}
          value={content}
          onChange={handleChange}
          placeholder="Message AI Chatbot"
          onKeyDown={handlePressEnter}
        />
      </div>
      <button className={styles.Button} onClick={handleSend}>
        <Send className={styles.icon} />
      </button>
    </div>
  );
}
