import { DeepseekAiAssistant } from "./deepseek.service.js";

const ai = new DeepseekAiAssistant();

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const reply = await ai.sendMessage(message);

    res.json({ text: reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
