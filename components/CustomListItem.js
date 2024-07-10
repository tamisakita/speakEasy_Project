import { StyleSheet, Text, View } from "react-native";
import { ListItem } from "@rneui/base";

// CustomListItem component to display phrases translared
// passed the prop itemData wich contains the array with data
export default function CustomListItem({ itemData }) {
  return (
    <View style={styles.container}>
      <ListItem>
        <Text style={styles.textQuestion}>{itemData.phrase}</Text>
      </ListItem>
      <ListItem>
        <Text style={styles.textAnswer}>{itemData.translation}</Text>
      </ListItem>
    </View>
  );
}

// Styles for the CustomListItem component
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
