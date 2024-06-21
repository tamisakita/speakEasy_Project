import { StyleSheet, View, ScrollView } from "react-native";
import { Text } from "@rneui/themed";

import { getTravelPhrasesButtonsData } from "../data/travel-phrases-buttons-data";

import CustomButtonTravePhrases from "../components/CustomButtonTravelPhrases";

export default function TravelPhrasesScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text h2>Travel Phrases</Text>
        <Text h4 style={styles.header4}>
          Essential Phrases at Your Fingertips
        </Text>

        {/* Dynamically generate buttons for each travel phrase category */}
        {getTravelPhrasesButtonsData().map((button) => (
          <CustomButtonTravePhrases
            key={button.title}
            title={button.title}
            icon={button.icon}
            route={button.route}
          />
        ))}
      </View>
    </ScrollView>
  );
}

// custom styles for the TravelPhrasesScreen component
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
    paddingBottom: 10,
  },
});
