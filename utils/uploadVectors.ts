import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { OpenAIEmbeddings } from "@langchain/openai";
import { openAIApiKey, sbClient } from "./keys";

export const uploadDocsToSupabase = async (splittedTextOutput: []) => {
  await SupabaseVectorStore.fromDocuments(
    splittedTextOutput,
    new OpenAIEmbeddings({ openAIApiKey }),
    {
      client: sbClient,
      tableName: "documents",
    }
  );
};
