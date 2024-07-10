// importing axios library for making HTTP requests
import axios from "axios";
// importing the API key from .env file for security
import { OPENAI_API_KEY } from "@env";

// creating a variable with API uri to use it later on the post request
const API_URL = "https://api.openai.com/v1/chat/completions";

const getOpenaiService = async (prompt) => {
  try {
    // doing a POST request to the API with axios
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
        max_tokens: 50,
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
    console.error(error);
    throw error;
  }
};

export { getOpenaiService };
