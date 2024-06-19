import PhrasesLayout from "../components/PhrasesLayout";
import { getGroceryData } from "../data/grocery-data";

//Component to display groceries related phrases
export default function GroceriesPhrasesScreen() {
  // Render the PhrasesLayout component with a title and data (array)
  return <PhrasesLayout title={"Transport"} data={getGroceryData()} />;
}
