// importing AsyncStorage to persist data (store the favs)
import AsyncStorage from "@react-native-async-storage/async-storage";

// function to get the favourites array for specific user
export async function getFavArrayByUser(userId) {
  let arrFav = [];
  console.log("getting favorites: " + arrFav);

  try {
    arrFav = await AsyncStorage.getItem(userId + "_FAV");
  } catch (e) {
    console.log("error: " + e);
  }

  console.log(arrFav);
  return arrFav;
}

// function to update the favourites array for a specific user.
export async function updateFavArrayByUser(userId, arrFavorites) {
  console.log("updating favorites");

  try {
    await AsyncStorage.setItem(userId + "_FAV", JSON.stringify(arrFavorites));
  } catch (e) {
    console.log("error: " + e);
  }
}

// function to check if a specific item is in the favourites list
export function checkFavorite(checkKey, currFavList) {
  let foundIndex = currFavList.findIndex((ele) => ele._id == checkKey);

  // console.log(currFavList);
  if (foundIndex >= 0) {
    return true;
  }

  return false;
}

// function to add an item to the favourites list
export function addFavorite(itemData, currFavList) {
  // afther checking if the item is alreart a fav, I denife a new object to add on the fav list
  if (!checkFavorite(itemData._id, currFavList)) {
    const phrase = {
      _id: itemData._id,
      phrase: itemData.phrase,
      translation: itemData.translation,
    };

    currFavList.push(itemData);
  }
}

// function to remove an item from the favourites list using filter that will update the array
export function delFavorite(itemData, currFavList) {
  let filteredList = currFavList.filter((ele) => ele._id != itemData._id);

  return filteredList;
}
