import { StyleSheet, Text, View } from "react-native";
import { ListItem } from "@rneui/base";

export default function CustomListItem({ itemData }) {
  return (
    <View style={styles.container}>
      <ListItem>
        <Text style={styles.textQuestion}>{itemData.english}</Text>
      </ListItem>
      <ListItem>
        <Text style={styles.textAnswer}>{itemData.portuguese}</Text>
      </ListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
  },
  textQuestion: {
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
  },
  textAnswer: { fontSize: 20, fontFamily: "Poppins_400Regular" },
});
