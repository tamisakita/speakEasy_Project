import { StyleSheet, View } from "react-native";
import { Text, Button } from "@rneui/themed";

// using two props
// user to check the current user and display his information
// and handleAuthentication to handle logout
const ProfileScreen = ({ user, handleAuthentication }) => {
  return (
    <View style={styles.container}>
      <Text h1>Profile</Text>
      <View style={styles.fieldContainer}>
        <Text h4>Name:</Text>
        <Text>Camila</Text>
      </View>

      <View style={styles.fieldContainer}>
        <Text h4>Email:</Text>
        <Text>{user.email}</Text>
      </View>

      <Button
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.buttonStyle}
        titleStyle={{ color: "#fff" }}
        title="Logout"
        onPress={handleAuthentication}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E0DBE8",
  },
  fieldContainer: {
    width: "100%",
    paddingBottom: 20,
  },
  buttonContainer: {
    width: "50%",
    paddingTop: 20,
  },
  buttonStyle: {
    paddingVertical: 15,
  },
});

export default ProfileScreen;
