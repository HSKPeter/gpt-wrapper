import { MathTutor } from "@src/agent";

export default async function solveMathEquation() {
  const mathTutor = new MathTutor();
  const mathEquation = "2 + 2";
  const response = await mathTutor.solveMathEquation(mathEquation);

  console.log("Math equation:", mathEquation);
  console.log("Response:", response);
  // Example of response:
  // The solution to the equation \(2 + 2\) is \(4\).
}
