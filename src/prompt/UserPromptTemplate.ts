import { ARTICLE_SUMMARIZATION_PROMPT_TEMPLATE } from "./chainOfDensity";

enum UserPromptTemplate {
    SOLVE_MATH_EQUATION = "I need to solve the equation `%s`. Can you help me?",
    SUMMARIZE_ARTICLE = ARTICLE_SUMMARIZATION_PROMPT_TEMPLATE
}

export default UserPromptTemplate;