import { ARTICLE_SUMMARIZATION_PROMPT_TEMPLATE, SystemPersona } from "@src/prompt";
import ChatCompletingAgent from "./base";
import { vsprintf } from "sprintf-js";


export default class ArticleSummarizer extends ChatCompletingAgent {
    protected systemPrompt = SystemPersona.ARTICLE_SUMMARIZER;

    public summarizeArticle(article: string) {
        const prompt = vsprintf(ARTICLE_SUMMARIZATION_PROMPT_TEMPLATE, [article]);
        return this.getResponse(prompt);
    }
}