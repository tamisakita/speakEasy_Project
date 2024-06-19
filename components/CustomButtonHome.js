import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Button } from "@rneui/themed";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

// getting the screen dimensions
const { width } = Dimensions.get("window");

// calculating the width based on screen size/ gap and padding
const buttonWidth = width / 2 - 30;

export default function CustomButtonHome({ title, icon }) {
  return (
    <Button
      buttonStyle={styles.customButtonContainer}
      title={title}
      icon={<FontAwesomeIcon icon={icon} size={55} color="white" />}
      iconPosition="top"
    ></Button>
  );
}

const styles = StyleSheet.create({
  customButtonContainer: {
    width: buttonWidth,
    height: buttonWidth,
  },
});
