import { StyleSheet, View, Image } from "react-native";
import { Text, Button } from "@rneui/themed";

export default function AriportPhrasesScreen() {
  return (
    <View style={styles.container}>
      <Text h2>Airport</Text>
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
});
