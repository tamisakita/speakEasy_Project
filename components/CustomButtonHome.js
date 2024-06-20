import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Button } from "@rneui/themed";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

// Function to calculate button width based on screen dimensions
const calculateButtonWidth = () => {
  const { width } = Dimensions.get("window");
  return width / 2 - 30; // Adjust the calculation as needed
};

export default function CustomButtonHome({ title, icon }) {
  const [buttonWidth, setButtonWidth] = useState(calculateButtonWidth);

  // Use useEffect to handle screen resizing
  useEffect(() => {
    const updateButtonWidth = () => {
      setButtonWidth(calculateButtonWidth());
    };

    // Add event listener for screen dimension changes
    Dimensions.addEventListener("change", updateButtonWidth);

    // Clean up the event listener on component unmount
    return () => {
      Dimensions.removeEventListener("change", updateButtonWidth);
    };
  }, []);

  return (
    // for this custom button I've used the Button component from @rneui/themed with its respective props
    <Button
      buttonStyle={{ width: buttonWidth, height: buttonWidth }}
      title={title}
      icon={<FontAwesomeIcon icon={icon} size={55} color="white" />}
      iconPosition="top"
    ></Button>
  );
}
