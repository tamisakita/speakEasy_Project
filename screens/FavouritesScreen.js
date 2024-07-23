import { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";

import { Text } from "@rneui/themed";

import { getFavArrayByUser } from "../services/FavouriteManager";

import CustomListItem from "../components/CustomListItem";

// importing AuthContext to get the user id
import { useAuth } from "../context/AuthContext";

const FavouritesScreen = ({ navigation }) => {
  // getting the current user with AuthContext
  const { user } = useAuth();

  // using useState hook to manage the fetched data, loading status and errors
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataResult, setDataResult] = useState([]);

  // this hook will fetch the fav items for the current user when the component mounts and when screen gains focus
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

    // event listener to re-fetch data when the screen gains focus
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

// functions to display the list of favs depending if there is an error, if its loading or if the data is not null or exist
function displayDataContainer(error, isLoaded, dataResult) {
  const renderItem = ({ item }) => <CustomListItem itemData={item} />;

  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  } else if (!isLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  } else if (dataResult === null || dataResult.length === 0) {
    return (
      <View>
        <Text>No favorites found for currently logged in user</Text>
      </View>
    );
  } else {
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
