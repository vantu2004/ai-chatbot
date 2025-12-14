import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GOOGLE_AI_API_KEY });

export class GoogleAiAssistant {
  #MODEL;

  constructor(MODEL = "gemini-2.5-flash") {
    this.#MODEL = MODEL;
  }

  async sendMessage(message) {
    const response = await ai.models.generateContent({
      model: this.#MODEL,
      contents: message,
    });

    return response.text;
  }
}

export default GoogleAiAssistant;
