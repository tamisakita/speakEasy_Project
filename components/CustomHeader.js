import React from "react";
import { Header } from "@rneui/base";
import { useRoute, useNavigation } from "@react-navigation/native";

// Custom header component for the application
const CustomHeader = () => {
  // Hook to access the navigation object
  const navigation = useNavigation();
  // Hook to access the current route
  const route = useRoute();

  // Function to handle back navigation
  const handleGoBack = () => {
    navigation.goBack();
  };

  // Verification to know if Im in Home page so I dont need to show the go back button
  const shouldShowBackButton =
    route.name !== "Home" && route.name !== "HomeScreen";

  return (
    <Header
      // Logo
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
        elevation: 5,
      }}
      // Go back button
      leftComponent={
        shouldShowBackButton && {
          icon: "arrow-left",
          type: "font-awesome",
          color: "black",
          onPress: handleGoBack,
        }
      }
      // Profile Button
    />
  );
};

export default CustomHeader;
