import axios from "axios";
import { OPENAI_API_KEY } from "@env";

const API_URL = "https://api.openai.com/v1/chat/completions";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getOpenaiService = async (prompt, retries = 3, backoff = 3000) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 150,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    if (error.response && error.response.status === 429 && retries > 0) {
      // If rate limited, wait for the backoff period and retry
      console.warn(`Rate limited. Retrying in ${backoff} ms...`);
      await sleep(backoff);
      return getOpenaiService(prompt, retries - 1, backoff * 2); // Increase backoff for next retry
    }
    console.error("Error communicating with OpenAI:", error);
    throw error;
  }
};

export { getOpenaiService };
