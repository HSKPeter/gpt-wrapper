import { ARTICLE_SUMMARIZATION_PROMPT_TEMPLATE, Persona } from "@src/prompt";
import ChatCompletingAgent from "./base";
import { vsprintf } from "sprintf-js";


export default class ArticleSummarizer extends ChatCompletingAgent {
    protected systemPrompt = Persona.ARTICLE_SUMMARIZER;

    public summarizeArticle(article: string) {
        const prompt = vsprintf(ARTICLE_SUMMARIZATION_PROMPT_TEMPLATE, [article]);
        return this.getResponse(prompt);
    }
}