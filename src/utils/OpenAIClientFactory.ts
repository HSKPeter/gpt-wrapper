import OpenAI from 'openai';
import dotenv from 'dotenv'; 
import { ErrorMessage } from '@src/constant';

dotenv.config();  // Load environment variables from .env file 

export default class OpenAIClientFactory {
    public static createClient() {
        const apiKey = process.env.OPEN_AI_API_KEY; 
        
        if (!apiKey) {
            throw new Error(ErrorMessage.API_KEY_NOT_FOUND);
        }

        return new OpenAI({ apiKey });
    }
}