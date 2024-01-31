import { SystemPersona } from "@src/prompt";
import ChatCompletingAgent from "./base";

export default class CodeExplainer extends ChatCompletingAgent {
    // Example prompt from https://platform.openai.com/examples/default-explain-code
    protected systemPrompt = SystemPersona.CODE_EXPLAINER;

    public explainCode(code: string) {
        return this.getResponse(code);
    }
}