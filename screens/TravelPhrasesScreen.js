import { StyleSheet, View } from "react-native";
import { Text } from "@rneui/themed";
import {
  faPlane,
  faBurger,
  faBus,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import CustomButtonTravePhrases from "../components/CustomButtonTravelPhrases";

export default function TravelPhrasesScreen() {
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
      <CustomButtonTravePhrases
        title={"Restaurant"}
        icon={faBurger}
        route={"RestaurantPhrases"}
      />
      <CustomButtonTravePhrases
        title={"Transport"}
        icon={faBus}
        route={"TransportPhrases"}
      />
      <CustomButtonTravePhrases
        title={"Groceries"}
        icon={faBasketShopping}
        route={"GroceriesPhrases"}
      />
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
