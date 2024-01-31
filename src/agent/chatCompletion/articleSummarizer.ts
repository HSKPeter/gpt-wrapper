import { SystemPersona, UserPromptTemplate } from "@src/prompt";
import ChatCompletingAgent from "./base";
import { vsprintf } from "sprintf-js";


export default class ArticleSummarizer extends ChatCompletingAgent {
    protected systemPrompt = SystemPersona.ARTICLE_SUMMARIZER;

    public summarizeArticle(article: string) {
        const prompt = vsprintf(UserPromptTemplate.SUMMARIZE_ARTICLE, [article]);
        return this.getResponse(prompt);
    }
}