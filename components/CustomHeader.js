import React from "react";
import { Header } from "@rneui/base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useRoute, useNavigation } from "@react-navigation/native";

const CustomHeader = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const shouldShowBackButton = route.name !== "Home";

  return (
    <Header
      backgroundColor="white"
      barStyle="default"
      centerComponent={{
        text: "SpeakEasy",
        style: {
          color: "#000",
          fontSize: 30,
          fontFamily: "JosefinSans_700Bold",
          textAlign: "center",
        },
      }}
      containerStyle={{
        width: "100%",
      }}
      leftComponent={
        shouldShowBackButton && {
          icon: "arrow-left",
          type: "font-awesome",
          color: "black",
          onPress: handleGoBack,
        }
      }
      rightComponent={
        <FontAwesomeIcon icon={faCircleUser} size={45} color="black" />
      }
    />
  );
};

export default CustomHeader;
