import { StyleSheet, View, Image } from "react-native";
import { Text, Button } from "@rneui/themed";
import {
  faComments,
  faCameraRetro,
  faKeyboard,
  faMicrophoneLines,
} from "@fortawesome/free-solid-svg-icons";

import CustomButtonHome from "../components/CustomButtonHome";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text h4>Welcome</Text>
      <Text h1>Jennifer</Text>
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
        icon={
          <Image
            source={require("../assets/flight.png")}
            style={styles.buttonImage}
          />
        }
        containerStyle={styles.travelPhrasesContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    padding: 30,
    backgroundColor: "#E0DBE8",
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  buttonImage: {
    width: 120,
    height: 120,
    resizeMode: "cover",
  },
  travelPhrasesContainer: {
    width: "100%",
  },
});
