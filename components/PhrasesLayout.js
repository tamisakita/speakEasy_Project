import { StyleSheet, View, FlatList } from "react-native";
import { Text } from "@rneui/themed";
import CustomListItem from "../components/CustomListItem";

// PhrasesLayout component to display a list of phrases with a title and optmize the code on each phrases category screen
export default function PhrasesLayout({ title, data }) {
  return (
    <View style={styles.container}>
      <Text h2>{title}</Text>
      {/* Display the list of phrases using FlatList */}
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({ item }) => <CustomListItem itemData={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

// Styles for the PhrasesLayout component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E0DBE8",
  },
  list: {
    paddingVertical: 20,
  },
});
