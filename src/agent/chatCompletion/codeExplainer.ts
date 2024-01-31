import ChatCompletingAgent from "./base";

export default class CodeExplainer extends ChatCompletingAgent {
    // Example prompt from https://platform.openai.com/examples/default-explain-code
    protected systemPrompt = "You will be provided with a piece of code, and your task is to explain it in a concise way.";

    public explainCode(code: string) {
        return this.getResponse(code);
    }
}