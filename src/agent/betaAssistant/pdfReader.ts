import { SystemPersona, UserPromptTemplate } from "@src/prompt";
import OpenAiBetaAssistant from "./base";
import fs from 'fs';
import AssistantToolType from "@src/model/AssistantToolType";
import { GptModel } from "@src/model";

export default class PdfReader extends OpenAiBetaAssistant {
    protected assistantName: string = "You are a financial analyst. Use your knowledge base to best respond to user queries.";

    constructor(private pdfFilePath: string) {
        super();
    }

    private async uploadFile() {
        // Upload a file with an "assistants" purpose
        const file = await this.openai.files.create({
            file: fs.createReadStream(this.pdfFilePath),
            purpose: "assistants",
        });
        const fileId = file.id;
        
        console.log(`File "${this.pdfFilePath}" uploaded successfully with id ${fileId}`);

        return file;
    }

    protected async createAssistant() {
        const file = await this.uploadFile();

        // Add the file to the assistant
        const assistant = await this.openai.beta.assistants.create({
            instructions: this.getInstructions(),
            model: GptModel.GPT_4_TURBO_PREVIEW,
            tools: [{ "type": AssistantToolType.RETRIEVAL }],
            file_ids: [file.id]
        });

        return assistant;
    }

    protected getInstructions() {
        return SystemPersona.PDF_READER;
    }

    public async answerQuestion(question: string) {
        return this.getResponse(question);
    }
}