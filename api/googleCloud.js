import axios from "axios";
// importing the api key from .env file
import { GOOGLE_TRANSLATE_API_KEY } from "@env";

// storing the api endpoing in the const
const API_URL = "https://translation.googleapis.com/language/translate/v2";

const getTranslationText = async (text, targetLanguage) => {
  try {
    // doing POST request with axios
    // added the endpoint, api key and body
    const response = await axios.post(
      `${API_URL}?key=${GOOGLE_TRANSLATE_API_KEY}`,
      {
        q: text,
        target: targetLanguage,
      }
    );

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error(`Error fetching Google translator`, error);
    throw error;
  }
};

export { getTranslationText };
