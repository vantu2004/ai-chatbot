import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPEN_AI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export class OpenAiAssistant {
  #MODEL;

  constructor(MODEL = "gpt-5-nano") {
    this.#MODEL = MODEL;
  }

  async sendMessage(message) {
    const response = await client.responses.create({
      model: this.#MODEL,
      input: message,
    });

    return response.output_text;
  }

  async *sendMessageStream(message) {
    const stream = await client.responses.create({
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
  }
}
