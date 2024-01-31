import { Persona } from "@src/prompt";
import OpenAiBetaAssistant from "./base";

export default class MathTutor extends OpenAiBetaAssistant {
    protected assistantName: string = "Math Tutor";

    protected getInstructions() {
        return Persona.MATH_TUTOR;
    }
}