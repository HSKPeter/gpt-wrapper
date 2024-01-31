import OpenAI from 'openai';
import { OpenAIClientFactory } from '@src/client';
import { MessageContentType, Role, RunStatus } from '@src/model';


export default abstract class OpenAiBetaAssistant {
    private isInitialized: boolean = false;
    private assistant: OpenAI.Beta.Assistants.Assistant | undefined;
    private thread: OpenAI.Beta.Threads.Thread | undefined;
    protected openai: OpenAI;

    protected assistantName: string = "Assistant";
    protected threadInstructions: string = "Please address the user's question.";

    constructor() {
        this.openai = OpenAIClientFactory.createClient();
    }

    protected abstract getInstructions(): string;

    private async initialize() {
        const assistant = await this.openai.beta.assistants.create({
            name: this.assistantName,
            instructions: this.getInstructions(),
            tools: [{ type: "code_interpreter" }],
            model: "gpt-4-turbo-preview"
        });

        this.assistant = assistant;

        const thread = await this.openai.beta.threads.create();
        this.thread = thread;

        this.isInitialized = true;
    }

    private async createRun(prompt: string) {
        if (!this.assistant || !this.thread) {
            throw new Error("Assistant not initialized");
        }

        await this.openai.beta.threads.messages.create(
            this.thread.id,
            {
                role: Role.USER,
                content: prompt
            }
        );

        const run = await this.openai.beta.threads.runs.create(
            this.thread.id,
            {
                assistant_id: this.assistant.id,
                instructions: this.threadInstructions,
            }
        );

        return run;
    }

    public async getResponse(prompt: string) {
        if (!this.isInitialized) {
            await this.initialize();
        }

        if (!this.assistant || !this.thread) {
            throw new Error("Assistant not initialized");
        }

        const runCreated = await this.createRun(prompt);

        const threadId = this.thread.id;
        const runId = runCreated.id;

        console.log(`Thread ID: ${threadId}`);
        console.log(`Run ID: ${runId}`);

        const runRetrieved = await this.openai.beta.threads.runs.retrieve(
            threadId,
            runId
        );

        let { status } = runRetrieved;

        while (status === RunStatus.IN_PROGRESS) {
            console.log("Waiting for completion...")
            await new Promise(resolve => setTimeout(resolve, 5000));
            const latestRunRetrieved = await this.openai.beta.threads.runs.retrieve(
                threadId,
                runId
            );
            status = latestRunRetrieved.status;
        }

        if (status === RunStatus.FAILED) {
            throw new Error("Run failed");
        }

        const messages = await this.openai.beta.threads.messages.list(threadId);

        let response = "";
        const messagesCount = messages.data.length;

        for (let i = messagesCount - 1; i >= 0; i--) {
            const message = messages.data[i];
            if (message.role === Role.ASSISTANT) {
                for (const contentItem of message.content) {
                    const hasTextContent = contentItem?.type === MessageContentType.TEXT && contentItem?.text?.value !== undefined;
                    if (hasTextContent) {
                        response += contentItem.text.value;
                    }
                }
            }
        }

        return response;
    }
}

