import { StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";

export default function CustomButtonTravePhrases({ title, icon, route }) {
  const navigation = useNavigation();
  return (
    <Button
      title={title}
      containerStyle={styles.buttonContainer}
      buttonStyle={styles.button}
      titleStyle={styles.title}
      icon={<FontAwesomeIcon icon={icon} size={50} color="white" />}
      iconRight={true}
      onPress={() => navigation.navigate(route)}
    />
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    paddingVertical: 10,
  },
  button: {
    paddingVertical: 20,
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
