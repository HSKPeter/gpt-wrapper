import { CodeExplainer, MathTutor, PdfReader } from "./agent";

export async function example1() {
    const codeExplainer = new CodeExplainer();
    const response = await codeExplainer.explainCode("def foo():\n    print('Hello, world!')\n\nfoo()");
    
    console.log(response);
    // Example of response:
    // This code defines a function called `foo` that prints the message "Hello, world!". It then calls the `foo` function, causing the message to be printed.
}

export async function example2() { 
    const mathTutor = new MathTutor();
    const response = await mathTutor.solveMathEquation("2 + 2");
    
    console.log(response);
    // Example of response:
    // The solution to the equation \(2 + 2\) is \(4\).
}

export async function example3() { 
    const pdfFilePath = "assets/AAPL_FY23_Q1_Consolidated_Financial_Statements.pdf";
    const pdfReader = new PdfReader(pdfFilePath);
    const answer = await pdfReader.answerQuestion("What is the total net sales for the quarter in 2022?");
    
    console.log(answer);
    // Example of response:
    // The total net sales for the quarter ending on December 31, 2022, were $117,154 million.
}