import PhrasesLayout from "../components/PhrasesLayout";
import { getTransportData } from "../data/transport-data";

export default function TransportPhrasesScreen() {
  return <PhrasesLayout title={"Transport"} data={getTransportData()} />;
}
