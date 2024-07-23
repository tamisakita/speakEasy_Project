import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Text } from "@rneui/themed";
import CustomListItem from "../components/CustomListItem";
import { getPhrasesByCategory } from "../api/phrasesAPI";

// PhrasesLayout component to display a list of phrases with a title and optmize the code on each phrases category screen
export default function PhrasesLayout({ title, category }) {
  const [phrases, setPhrases] = useState([]);

  useEffect(() => {
    const fetchPhrases = async () => {
      try {
        const fetchedPhrases = await getPhrasesByCategory(category);
        // console.log(fetchedPhrases);
        setPhrases(fetchedPhrases);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPhrases();
  }, [category]);

  return (
    <View style={styles.container}>
      <Text h2>{title}</Text>
      {/* Display the list of phrases using FlatList */}
      <FlatList
        style={styles.list}
        data={phrases}
        renderItem={({ item }) => <CustomListItem itemData={item} />}
        keyExtractor={(item) => item._id}
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
