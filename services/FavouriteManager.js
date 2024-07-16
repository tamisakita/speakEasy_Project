import AsyncStorage from "@react-native-async-storage/async-storage";

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

export async function updateFavArrayByUser(userId, arrFavorites) {
  console.log("updating favorites");

  try {
    await AsyncStorage.setItem(userId + "_FAV", JSON.stringify(arrFavorites));
  } catch (e) {
    console.log("error: " + e);
  }
}

export function checkFavorite(checkKey, currFavList) {
  let foundIndex = currFavList.findIndex((ele) => ele.id == checkKey);

  if (foundIndex >= 0) {
    return true;
  }

  return false;
}

export function addFavorite(itemData, currFavList) {
  if (!checkFavorite(itemData._id, currFavList)) {
    const phrase = {
      id: itemData._id,
      phrase: itemData.phrase,
      translation: itemData.translation,
    };

    currFavList.push(itemData);
  }
}

export function delFavorite(itemData, currFavList) {
  let filteredList = currFavList.filter((ele) => ele.id != itemData._id);

  return filteredList;
}
