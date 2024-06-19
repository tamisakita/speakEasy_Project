import { StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";

// Created the CustomButtonTravePhrases to dynamically generate the button and used the props title, icon and route
export default function CustomButtonTravePhrases({ title, icon, route }) {
  // Use navigation hook to handle navigation
  const navigation = useNavigation();
  return (
    <Button
      title={title}
      containerStyle={styles.buttonContainer}
      buttonStyle={styles.button}
      titleStyle={styles.title}
      icon={<FontAwesomeIcon icon={icon} size={50} color="white" />}
      iconRight={true}
      // Handle button press to navigate to the specified route
      onPress={() => navigation.navigate(route)}
    />
  );
}

// Custom style for the Button component
const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    paddingVertical: 10,
  },
  button: {
    paddingVertical: 35,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 26,
    textAlign: "left",
  },
});
