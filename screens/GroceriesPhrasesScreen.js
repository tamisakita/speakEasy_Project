import PhrasesLayout from "../components/PhrasesLayout";
import { getGroceryData } from "../data/grocery-data";

export default function GroceriesPhrasesScreen() {
  return <PhrasesLayout title={"Transport"} data={getGroceryData()} />;
}
