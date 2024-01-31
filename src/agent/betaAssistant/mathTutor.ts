import OpenAiBetaAssistant from "./base";

export default class MathTutor extends OpenAiBetaAssistant {
    protected static assistantName: string = "Math Tutor";

    protected static instructions: string = "You are a personal math tutor. Write and run code to answer math questions.";
}