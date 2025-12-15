import OpenAI from "openai";
import { OpenAiAssistant } from "./openAi";

const openAi = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: import.meta.env.VITE_DEEPSEEK_AI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export class DeepseekAiAssistant extends OpenAiAssistant {
  constructor(client = openAi, MODEL = "deepseek-chat") {
    super(client, MODEL);
  }
}
