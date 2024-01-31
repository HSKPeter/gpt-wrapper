import { vsprintf } from "sprintf-js";

import { SystemPersona, UserPromptTemplate } from "@src/prompt";

import OpenAiBetaAssistant from "./base";

export default class MathTutor extends OpenAiBetaAssistant {
  protected assistantName: string = "Math Tutor";

  protected getInstructions() {
    return SystemPersona.MATH_TUTOR;
  }

  public async solveMathEquation(equation: string) {
    const prompt = vsprintf(UserPromptTemplate.SOLVE_MATH_EQUATION, [equation]);
    return this.getResponse(prompt);
  }
}
