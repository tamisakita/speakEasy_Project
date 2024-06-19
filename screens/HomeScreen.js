import { StyleSheet, View, Image } from "react-native";
import { Text, Button } from "@rneui/themed";

import {
  faComments,
  faCameraRetro,
  faKeyboard,
  faMicrophoneLines,
} from "@fortawesome/free-solid-svg-icons";

import CustomButtonHome from "../components/CustomButtonHome";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text h4 style={styles.leftAlignText}>
        Welcome
      </Text>
      <Text h1 style={styles.leftAlignText}>
        Camila
      </Text>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <CustomButtonHome title="Live Chat" icon={faComments} />
          <CustomButtonHome title="Text" icon={faKeyboard} />
        </View>
        <View style={styles.row}>
          <CustomButtonHome title="Camera" icon={faCameraRetro} />
          <CustomButtonHome title="Voice" icon={faMicrophoneLines} />
        </View>
      </View>
      <Button
        title="Travel Phrases"
        iconRight
        containerStyle={styles.travelPhrasesContainer}
        buttonStyle={styles.travelPhrasesButton}
        titleStyle={{ color: "#000" }}
        icon={
          <Image
            source={require("../assets/flight.png")}
            style={styles.buttonImage}
          />
        }
        onPress={() => navigation.navigate("TravelPhrases")}
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
  leftAlignText: {
    textAlign: "left",
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    // marginHorizontal: 10,
  },
  buttonImage: {
    width: 120,
    height: 120,
    resizeMode: "cover",
    marginLeft: 10,
  },
  travelPhrasesContainer: {
    width: "100%",
    justifyContent: "space-between",
  },
  travelPhrasesButton: {
    backgroundColor: "rgba(250, 250, 250, 0.5)",
    borderWidth: 2,
    borderColor: "rgba(92, 60, 139, 0.5)",
  },
});
