import { CodeExplainer } from "@src/agent";

export default async function explainCode() {
  const codeExplainer = new CodeExplainer();

  const code = "def foo():\n    print('Hello, world!')\n\nfoo()\n";
  const explanation = await codeExplainer.explainCode(code);

  console.log(`Code:\n${code}`);
  console.log(`Explanation:\n${explanation}`);
  // Example of explanation:
  // This code defines a function called `foo` that prints the message "Hello, world!". It then calls the `foo` function, causing the message to be printed.
}
