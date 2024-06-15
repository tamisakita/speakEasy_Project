import { StyleSheet, View } from "react-native";
import { Text } from "@rneui/themed";
import {
  faPlane,
  faBurger,
  faBus,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import CustomButtonTravePhrases from "../components/CustomButtonTravelPhrases";

export default function travelPhrasesScreen() {
  return (
    <View style={styles.container}>
      <Text h2>Travel Phrases</Text>
      <Text h4 style={styles.header4}>
        Essential Phrases at Your Fingertips
      </Text>
      <CustomButtonTravePhrases
        title={"Airport"}
        icon={faPlane}
        route={"AirportPhrases"}
      />
      <CustomButtonTravePhrases title={"Restaurant"} icon={faBurger} />
      <CustomButtonTravePhrases title={"Transport"} icon={faBus} />
      <CustomButtonTravePhrases title={"Groceries"} icon={faBasketShopping} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E0DBE8",
  },
  header4: {
    textAlign: "center",
    fontSize: 16,
  },
});
