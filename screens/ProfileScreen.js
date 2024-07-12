import { StyleSheet, View } from "react-native";
import { Text, Button } from "@rneui/themed";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text h1>Profile</Text>
      <View style={styles.fieldContainer}>
        <Text h4>Name:</Text>
        <Text>my name</Text>
      </View>

      <View style={styles.fieldContainer}>
        <Text h4>Email:</Text>
        <Text>my name</Text>
      </View>

      <Button
        title="Sign Out"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.buttonStyle}
        titleStyle={{ color: "#fff" }}
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
  fieldContainer: {
    width: "100%",
    paddingBottom: 20,
  },
  buttonContainer: {
    width: "50%",
    paddingTop: 20,
  },
  buttonStyle: {
    paddingVertical: 15,
  },
});
