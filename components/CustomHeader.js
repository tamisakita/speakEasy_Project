import React from "react";
import { Header } from "@rneui/base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const CustomHeader = () => {
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
        },
      }}
      containerStyle={{ width: "100%" }}
      placement="center"
      rightComponent={
        <FontAwesomeIcon icon={faCircleUser} size={45} color="black" />
      }
    />
  );
};

export default CustomHeader;
