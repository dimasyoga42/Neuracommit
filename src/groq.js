import axios from "axios";

export const generateCommitia = async (diff, config) => {
  try {
    const res = await axios.post(
      config.link,
      {
        model: config.model,
        messages: [
          {
            role: "system",
            content:
              "You are an expert developer. Generate a concise commit message in Conventional Commits format (feat, fix, chore, refactor, docs, test). Use only one line.",
          },
          {
            role: "user",
            content: `Analyze this git diff and generate a commit message:\n${diff}`,
          },
        ],
        temperature: 0.2,
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${config.apikey}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res.data.choices?.[0]?.message?.content?.trim() || "chore: update";
  } catch (error) {
    console.error("Groq API Error:", error?.response?.data || error.message);
    return "chore: update";
  }
};
