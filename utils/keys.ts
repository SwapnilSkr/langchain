import { createClient } from "@supabase/supabase-js";
import { ChatOpenAI } from "@langchain/openai";
import dotenv from "dotenv";

dotenv.config();

export const sbApiKey = process.env.SUPABASE_API_KEY as string;
export const sbUrl = process.env.SUPABASE_PROJECT_URL as string;
export const openAIApiKey = process.env.OPENAI_API_KEY as string;
export const sbClient = createClient(sbUrl, sbApiKey);

export const llm = new ChatOpenAI({ openAIApiKey });
