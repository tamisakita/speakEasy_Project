import axios from "axios";
import { GOOGLE_TRANSLATE_API_KEY } from "@env";

const API_URL = "https://translation.googleapis.com/language/translate/v2";

const getTranslationText = async (text, targetLanguage) => {
  const response = await axios.post(
    `${API_URL}?key=${GOOGLE_TRANSLATE_API_KEY}`,
    {
      q: text,
      target: targetLanguage,
    }
  );

  return response.data.data.translations[0].translatedText;
};

export { getTranslationText };
