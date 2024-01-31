import { SystemPersona } from "@src/prompt";
import OpenAiBetaAssistant from "./base";

export default class MathTutor extends OpenAiBetaAssistant {
    protected assistantName: string = "Math Tutor";

    protected getInstructions() {
        return SystemPersona.MATH_TUTOR;
    }
}