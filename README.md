# GPT-wrapper

This repository contains the TypeScript wrapper code for the OpenAI API. The wrapper is designed using object-oriented programming (OOP) principles. With this wrapper, you can replace long boilerplate code with a few lines of code, making it easier to integrate GPT functionality into your projects.

## Development Setup

- Prerequisites: Make sure you have Node.js (>= v18) and npm installed. (Learn more about Node.js and npm [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).)
- Run `npm install` to install all dependencies.
- Create a `.env` file in the root directory of the project and add your OpenAI API key to it. You may refer to the `.env.example` file for an example.
- Run `npm run sample` to run the sample code in `src/sample.ts`.

## Example

### Without wrapper

(Code sample with reference to [OpenAI official documentation](https://platform.openai.com/examples/default-explain-code))

```typescript
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const code = "def foo():\n    print('Hello, world!')\n\nfoo()\n";

const response = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [
    {
      role: "system",
      content:
        "You will be provided with a piece of code, and your task is to explain it in a concise way.",
    },
    {
      role: "user",
      content: code,
    },
  ],
  temperature: 0.7,
  max_tokens: 64,
  top_p: 1,
});

const explanation = response.choices[0].message.content;
console.log(explanation);
```

### With wrapper

```typescript
import { CodeExplainer } from "@src/agent";

const codeExplainer = new CodeExplainer();

const code = "def foo():\n    print('Hello, world!')\n\nfoo()\n";
const explanation = await codeExplainer.explainCode(code);
console.log(explanation);
```
