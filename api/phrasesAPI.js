import axios from "axios";

const API_URL =
  "https://speakeasy-api-023e509b34be.herokuapp.com/api/v1/phrases";

const getPhrasesByCategory = async (category) => {
  try {
    const response = await axios.get(API_URL, {
      params: { category },
    });
    // console.log(response.data);
    return response.data; // Adjusting to return only the phrases for the given category
  } catch (error) {
    console.error(`Error fetching ${category} phrases:`, error);
    throw error;
  }
};

export { getPhrasesByCategory };
