import { CodeExplainer, MathTutor } from "./agent";

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
}