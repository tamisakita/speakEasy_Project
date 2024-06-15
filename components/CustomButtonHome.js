import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function CustomButtonHome({ title, icon }) {
  return (
    <Button
      containerStyle={styles.customButtonContainer}
      title={title}
      icon={<FontAwesomeIcon icon={icon} size={55} color="white" />}
      iconPosition="top"
    ></Button>
  );
}

const styles = StyleSheet.create({
  customButtonContainer: {
    width: "50%",
  },
});
