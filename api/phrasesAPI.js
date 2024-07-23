import axios from "axios";

// storing the api endpoing into a const
const API_URL =
  "https://speakeasy-api-023e509b34be.herokuapp.com/api/v1/phrases";

const getPhrasesByCategory = async (category) => {
  try {
    // doing GET request and adding the category with params so I can retrieve the data from the specific category
    const response = await axios.get(API_URL, {
      params: { category },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${category} phrases:`, error);
    throw error;
  }
};

export { getPhrasesByCategory };
