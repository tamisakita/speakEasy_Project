import PhrasesLayout from "../components/PhrasesLayout";
import { getRestaurantData } from "../data/restaurant-data";

//Component to display restaurant related phrases
export default function RestaurantPhrasesScreen() {
  // Render the PhrasesLayout component with a title and data (array)
  return <PhrasesLayout title={"Restaurant"} data={getRestaurantData()} />;
}
