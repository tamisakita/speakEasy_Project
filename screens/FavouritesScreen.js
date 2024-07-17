import { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import { Button, Text } from "@rneui/themed";

import { getFavArrayByUser } from "../services/FavouriteManager";

import CustomListItem from "../components/CustomListItem";

// importing AuthContext to get the user id
import { useAuth } from "../context/AuthContext";

const FavouritesScreen = ({ navigation }) => {
  const { user } = useAuth();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataResult, setDataResult] = useState([]);

  useEffect(() => {
    getFavArrayByUser(user.uid).then(
      (result) => {
        setIsLoaded(true);
        setDataResult(JSON.parse(result));
        console.log("here");
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
    const willFocusSubscription = navigation.addListener("focus", () => {
      getFavArrayByUser(user.uid).then(
        (result) => {
          setIsLoaded(true);
          setDataResult(JSON.parse(result));
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    });

    return willFocusSubscription;
  }, []);

  return (
    <View style={styles.container}>
      <Text h1>Favourites</Text>
      {displayDataContainer(error, isLoaded, dataResult)}
    </View>
  );
};

function displayDataContainer(error, isLoaded, dataResult) {
  // since the flatlist will be moved to this function we'll need the renderItem in scope
  const renderItem = ({ item }) => <CustomListItem itemData={item} />;

  if (error) {
    // show an error message
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  } else if (!isLoaded) {
    // show the ActivityIndicator (spinner)
    return (
      <View>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  } else if (dataResult === null || dataResult.length === 0) {
    // not an error but no resorts, so show a message
    return (
      <View>
        <Text>No favorites found for currently logged in user</Text>
      </View>
    );
  } else {
    // show the data in the FlatList
    return (
      <FlatList
        style={styles.list}
        data={dataResult}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    );
  }
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

export default FavouritesScreen;
