import { CodeExplainer, MathTutor, PdfReader } from "./agent";

export async function example1() {
    const codeExplainer = new CodeExplainer();

    const code = "def foo():\n    print('Hello, world!')\n\nfoo()\n";
    const explanation = await codeExplainer.explainCode(code);

    console.log(`Code:\n${code}`);
    console.log(`Explanation:\n${explanation}`);
    // Example of explanation:
    // This code defines a function called `foo` that prints the message "Hello, world!". It then calls the `foo` function, causing the message to be printed.
}

export async function example2() {
    const mathTutor = new MathTutor();
    const mathEquation = "2 + 2";
    const response = await mathTutor.solveMathEquation(mathEquation);

    console.log("Math equation:", mathEquation);
    console.log("Response:", response);
    // Example of response:
    // The solution to the equation \(2 + 2\) is \(4\).
}

export async function example3() {
    const pdfFilePath = "assets/AAPL_FY23_Q1_Consolidated_Financial_Statements.pdf";
    const pdfReader = new PdfReader(pdfFilePath);

    const question = "What is the total net sales for the quarter in 2022?";
    const answer = await pdfReader.answerQuestion("What is the total net sales for the quarter in 2022?");

    console.log("Question:", question);
    console.log("Answer:", answer);
    // Example of answer:
    // The total net sales for the quarter ending on December 31, 2022, were $117,154 million.
}