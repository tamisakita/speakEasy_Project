import PhrasesLayout from "../components/PhrasesLayout";
import { getRestaurantData } from "../data/restaurant-data";

export default function RestaurantPhrasesScreen() {
  return <PhrasesLayout title={"Restaurant"} data={getRestaurantData()} />;
}
