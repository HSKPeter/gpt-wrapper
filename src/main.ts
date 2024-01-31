import { CodeExplainer } from "./agent";

async function main() {
    const codeExplainer = new CodeExplainer();
    const response = await codeExplainer.explainCode("def foo():\n    print('Hello, world!')\n\nfoo()");
    console.log(response);

    // Example of response:
    // This code defines a function called `foo` that prints the message "Hello, world!". It then calls the `foo` function, causing the message to be printed.
}

main();