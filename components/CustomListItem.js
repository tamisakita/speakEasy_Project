import React, { useState, useEffect } from "react";

import { StyleSheet, Text, View } from "react-native";
import { ListItem, Icon } from "@rneui/base";

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
  const { user } = useAuth();
  const currUserId = user.uid;

  const [isFavorite, setIsFavorite] = useState(null);

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
          // name="heart"
          color={"#5C3C8B"}
          onPress={() => {
            toggleFav(currUserId, itemData, isFavorite, setIsFavorite);
          }}
        />
      </View>
    </View>
  );
}

function initFavoriteState(currUserId, itemData, setIsFavorite) {
  // didn't bother with a spinnner or error flag here
  // in either case the state will be null, so the icon will stay white
  // effectively hiding it
  useEffect(() => {
    getFavArrayByUser(currUserId).then(
      (result) => {
        const currFavList = JSON.parse(result);

        // if not null then set with value
        if (currFavList !== null) {
          // checkFavorite returns a bool so use it directly to set the state
          setIsFavorite(checkFavorite(itemData._id, currFavList));
        } else {
          // otherwise default to false
          setIsFavorite(false);
        }
      },
      (e) => {
        console.log("error: " + e);
      }
    );
  }, []);
}

function toggleFav(currUserId, itemData, isFav, setIsFav) {
  let currFavList;

  // get the current array
  getFavArrayByUser(currUserId)
    .then(
      (result) => {
        currFavList = JSON.parse(result);
        console.log(currFavList);

        // if null key doesn't exist so init an empty array
        if (currFavList === null) {
          currFavList = [];
        }

        // checkFavorite returns a bool so use it directly to set the state
        if (isFav) {
          // remove from favorites (passes back the filtered version so we need to assign)
          let updatedFavList = delFavorite(itemData, currFavList);
          updateFavArrayByUser(currUserId, updatedFavList);
        } else {
          // add to favorites
          addFavorite(itemData, currFavList);

          // might be a good idea to check if the array was changed to prevent
          // un-neccessary updates but for local storage it's not a huge issue
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
