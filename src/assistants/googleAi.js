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

  // đây là hàm generator, hàm có thể tạm dừng (pause) và chạy tiếp (resume)
  async *sendMessageStream(message) {
    try {
      const response = await ai.models.generateContentStream({
        model: this.#MODEL,
        contents: message,
      });

      for await (const chunk of response) {
        yield chunk.text ?? "";
      }
    } catch (err) {
      console.error(err);

      let message = "Gemini error";
      if (err?.message) {
        try {
          const parsedError = JSON.parse(err.message);
          const parsedMessage = JSON.parse(parsedError.error.message);
          message = parsedMessage.error.message;
        } catch (error) {
          message = error.message;
        }
      }

      throw message;
    }
  }
}

export default GoogleAiAssistant;
