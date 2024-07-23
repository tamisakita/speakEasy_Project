import React, { useState, useEffect } from "react";

import { StyleSheet, Text, View } from "react-native";
import { ListItem, Icon } from "@rneui/base";

// importing the functions to manage the favs
import {
  getFavArrayByUser,
  updateFavArrayByUser,
  checkFavorite,
  addFavorite,
  delFavorite,
} from "../services/FavouriteManager";

// importing AuthContext to get the user id
import { useAuth } from "../context/AuthContext";

// CustomListItem component to display phrases translared
// passed the prop itemData wich contains the array with data
export default function CustomListItem({ itemData }) {
  // getting the current user with AuthContext
  const { user } = useAuth();
  const currUserId = user.uid;

  // using useState hook to track if its fav or not
  const [isFavorite, setIsFavorite] = useState(null);

  // function that will initialize the fav state
  initFavoriteState(currUserId, itemData, setIsFavorite);

  return (
    <View style={styles.container}>
      <ListItem>
        <Text style={styles.textQuestion}>{itemData.phrase}</Text>
      </ListItem>
      <ListItem>
        <Text style={styles.textAnswer}>{itemData.translation}</Text>
      </ListItem>
      <View style={styles.iconContainer}>
        <Icon
          type="ionicon"
          size={32}
          name={isFavorite ? "heart" : "heart-outline"}
          color={"#5C3C8B"}
          onPress={() => {
            toggleFav(currUserId, itemData, isFavorite, setIsFavorite);
          }}
        />
      </View>
    </View>
  );
}

// function to initialize the favourite state for each item
function initFavoriteState(currUserId, itemData, setIsFavorite) {
  useEffect(() => {
    getFavArrayByUser(currUserId).then(
      (result) => {
        const currFavList = JSON.parse(result);

        if (currFavList !== null) {
          setIsFavorite(checkFavorite(itemData._id, currFavList));
        } else {
          setIsFavorite(false);
        }
      },
      (e) => {
        console.log("error: " + e);
      }
    );
  }, []);
}

// function to toggle the favourite status of each item
function toggleFav(currUserId, itemData, isFav, setIsFav) {
  let currFavList;

  getFavArrayByUser(currUserId)
    .then(
      (result) => {
        currFavList = JSON.parse(result);
        console.log(currFavList);

        if (currFavList === null) {
          currFavList = [];
        }

        if (isFav) {
          let updatedFavList = delFavorite(itemData, currFavList);
          updateFavArrayByUser(currUserId, updatedFavList);
        } else {
          addFavorite(itemData, currFavList);

          updateFavArrayByUser(currUserId, currFavList);
        }
      },
      (e) => {
        console.log("error: " + e);
      }
    )
    .then(setIsFav(!isFav));
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
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 20,
    paddingBottom: 20,
  },
});
