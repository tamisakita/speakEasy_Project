// components/CustomHeader.js
import React from "react";
import { Header } from "@rneui/base";

const CustomHeader = () => {
  return (
    <Header
      backgroundColor="white"
      barStyle="default"
      centerComponent={{
        text: "SpeakEasy",
        style: {
          color: "#000",
          fontSize: 24,
          fontFamily: "JosefinSans_700Bold",
        },
      }}
      containerStyle={{ width: "100%" }}
      placement="center"
      rightComponent={{ icon: "home", color: "#000" }}
    />
  );
};

export default CustomHeader;
