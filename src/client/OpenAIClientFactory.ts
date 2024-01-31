import OpenAI from 'openai';
import dotenv from 'dotenv'; 

dotenv.config();  // Load environment variables from .env file 

export default class OpenAIClientFactory {
    public static createClient() {
        const apiKey = process.env.OPEN_AI_API_KEY; 
        
        if (!apiKey) {
            throw new Error("API key not found");
        }

        return new OpenAI({ apiKey });
    }
}