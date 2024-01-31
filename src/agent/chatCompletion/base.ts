import OpenAI from "openai";
import { OpenAIClientFactory } from "@src/client";
import { Role } from "@src/model";
import { ErrorMessage } from "@src/constant";
import { Persona } from "@src/prompt";

export default abstract class ChatCompletingAgent {
    protected openai: OpenAI;
    protected systemPrompt = Persona.DEFAULT;
    protected temperature = 0.7;
    protected maxTokens = 64;
    protected topP = 1;

    constructor() {
        this.openai = OpenAIClientFactory.createClient();
    }

    protected async getResponse(prompt: string) {
        const chatCompletionResponse = await this.openai.chat.completions.create({
            model: GptModel.GPT_3_5_TURBO,
            messages: [
                {
                    "role": Role.SYSTEM,
                    "content": this.systemPrompt
                },
                {
                    "role": Role.USER,
                    "content": prompt
                }
            ],
            temperature: this.temperature,
            max_tokens: this.maxTokens,
            top_p: this.topP,
        });

        const { choices } = chatCompletionResponse;

        if (!choices || choices.length === 0) {
            throw new Error(ErrorMessage.NO_CHOICES);
        }

        const firstChoice = choices[0];

        const content = firstChoice.message?.content;

        if (!content) {
            throw new Error(ErrorMessage.NO_CONTENT);
        }
        return content;
    }
}
