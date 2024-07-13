import React from "react";
import { StyleSheet, View, Image } from "react-native";

// Imported custom theme
import { Text, Button } from "@rneui/themed";

// Imported icons from fontawesome
import {
  faComments,
  faCameraRetro,
  faKeyboard,
  faMicrophoneLines,
} from "@fortawesome/free-solid-svg-icons";

// Imported CustomButtonHome to be used on the home screen
import CustomButtonHome from "../components/CustomButtonHome";

// added prop navigation to navigate through screens
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text h2 style={styles.leftAlignText}>
        Welcome!
      </Text>
      <Text h1 style={styles.leftAlignText}>
        Camila
      </Text>

      {/* Container with cutomized buttons to navigate to Live Chat, Text, Camera and Voice */}
      {/* I created a custom component CustomButtonHome to optmize code */}
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <CustomButtonHome
            title="Live Chat"
            icon={faComments}
            route="ChatScreen"
            navigation={navigation}
          />
          <CustomButtonHome
            title="Text"
            icon={faKeyboard}
            route="TextScreen"
            navigation={navigation}
          />
        </View>
        {/* Camera e Voice translation will be implemented in the future */}
        {/* <View style={styles.row}>
          <CustomButtonHome
            title="Camera"
            icon={faCameraRetro}
            route="CameraScreen"
            navigation={navigation}
          />
          <CustomButtonHome
            title="Voice"
            icon={faMicrophoneLines}
            route="TextScreen"
            navigation={navigation}
          />
        </View> */}
      </View>

      {/* Button to navigate to Travel Phrases */}
      {/* used onPress={() => navigation.navigate("TravelPhrases")} with the route TravelPhrases to go to the list of phrases*/}
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

// Custom style for the components on the top
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
  },
  buttonImage: {
    width: 160,
    height: 160,
    resizeMode: "cover",
    marginLeft: 10,
  },
  travelPhrasesContainer: {
    width: "100%",
  },
  travelPhrasesButton: {
    backgroundColor: "rgba(250, 250, 250, 0.5)",
    borderWidth: 2,
    borderColor: "rgba(92, 60, 139, 0.5)",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 240,
  },
});
