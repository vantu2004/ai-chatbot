import React from "react";
import { Send } from "lucide-react";
import styles from "./Controls.module.css";
import TextareaAutosize from "react-textarea-autosize";

export function Controls({ isDisabled = false, onSend }) {
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
        <TextareaAutosize
          className={styles.TextArea}
          mỉnRows={1}
          maxRows={5}
          disabled={isDisabled}
          value={content}
          onChange={handleChange}
          placeholder="Message AI Chatbot"
          onKeyDown={handlePressEnter}
        />
      </div>
      <button
        className={styles.Button}
        disabled={isDisabled}
        onClick={handleSend}
      >
        <Send className={styles.icon} />
      </button>
    </div>
  );
}
