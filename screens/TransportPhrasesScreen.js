import PhrasesLayout from "../components/PhrasesLayout";
import { getTransportData } from "../data/transport-data";

//Component to display transport related phrases
export default function TransportPhrasesScreen() {
  // Render the PhrasesLayout component with a title and data (array)
  return <PhrasesLayout title={"Transport"} data={getTransportData()} />;
}
