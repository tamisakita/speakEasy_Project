import PhrasesLayout from "../components/PhrasesLayout";
import { getAirportData } from "../data/airport-data";

//Component to display airport related phrases
export default function AirportPhrasesScreen() {
  // Render the PhrasesLayout component with a title and data (array)
  return <PhrasesLayout title={"Airport"} data={getAirportData()} />;
}
