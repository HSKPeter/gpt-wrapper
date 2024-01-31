import { SystemPersona } from "@src/prompt";
import ChatCompletingAgent from "./base";
import { GptModel } from "@src/model";

export default class CodeExplainer extends ChatCompletingAgent {
    // Example prompt from https://platform.openai.com/examples/default-explain-code
    protected systemPrompt = SystemPersona.CODE_EXPLAINER;
    protected gptModel = GptModel.GPT_4;

    public explainCode(code: string) {
        return this.getResponse(code);
    }
}