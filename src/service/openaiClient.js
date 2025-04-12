import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // add this to your .env file
  dangerouslyAllowBrowser: true, // Required if you're using it directly in frontend (not recommended for production)
});

export default openai;
