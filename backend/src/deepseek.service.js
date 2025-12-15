import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

export class DeepseekAiAssistant {
  #client;
  #MODEL;

  constructor(
    client = new OpenAI({
      baseURL: "https://api.deepseek.com",
      apiKey: process.env.DEEPSEEK_API_KEY,
    }),
    MODEL = "deepseek-chat"
  ) {
    this.#client = client;
    this.#MODEL = MODEL;
  }

  async sendMessage(message) {
    const response = await this.#client.chat.completions.create({
      messages: [{ role: "system", content: message }],
      model: this.#MODEL,
    });

    return response.output_text;
  }
}
