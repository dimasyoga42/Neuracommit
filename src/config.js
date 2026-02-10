import dotenv from "dotenv";
dotenv.config();

export const loadConfig = async (options = {}) => {
  const keyFromArg = options.key;
  const apikey = keyFromArg || process.env.GROQ_API_KEY;

  if (!apikey) {
    throw new Error("GROQ_API_KEY is not set, use env or --key flag");
  }

  return {
    apikey,
    model: "llama-3.3-70b-versatile",
    link: "https://api.groq.com/openai/v1/chat/completions",
  };
};
