import OpenAI from "openai";

const openAi = new OpenAI({
  apiKey: import.meta.env.VITE_OPEN_AI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export class OpenAiAssistant {
  #client;
  #MODEL;

  constructor(client = openAi, MODEL = "gpt-5-nano") {
    this.#client = client;
    this.#MODEL = MODEL;
  }

  async sendMessage(message) {
    const response = await this.#client.responses.create({
      model: this.#MODEL,
      input: message,
    });

    return response.output_text;
  }

  async *sendMessageStream(message) {
    try {
      const stream = await this.#client.responses.create({
        model: this.#MODEL,
        input: message,
        stream: true,
      });

      for await (const event of stream) {
        // chỉ lấy text delta
        if (event.type === "response.output_text.delta") {
          yield event.delta;
        }

        // optional: kết thúc
        if (event.type === "response.completed") {
          return;
        }
      }
    } catch (error) {
      console.error(error);
      throw error.message;
    }
  }
}
