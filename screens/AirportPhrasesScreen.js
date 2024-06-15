import PhrasesLayout from "../components/PhrasesLayout";
import { getAirportData } from "../data/airport-data";

export default function AirportPhrasesScreen() {
  return <PhrasesLayout title={"Airport"} data={getAirportData()} />;
}
