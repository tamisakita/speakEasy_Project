import { StyleSheet, View, FlatList } from "react-native";
import { Text } from "@rneui/themed";
import CustomListItem from "../components/CustomListItem";

export default function PhrasesLayout({ title, data }) {
  return (
    <View style={styles.container}>
      <Text h2>{title}</Text>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({ item }) => <CustomListItem itemData={item} />}
        keyExtractor={(item) => item.id}
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
  list: {
    paddingVertical: 20,
  },
});
