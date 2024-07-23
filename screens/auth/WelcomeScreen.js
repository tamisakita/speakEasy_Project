import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";

const WelcomeScreen = () => {
  // useNavigation to access navigation object
  // used to navigate through login and signup screens
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SpeakEasy</Text>
      <Button
        title="Log In"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.loginButton}
        titleStyle={{ color: "#5C3C8B" }}
        onPress={() => navigation.navigate("Login")}
      />
      <Button
        title="Sign Up"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.signupButton}
        onPress={() => navigation.navigate("SignUp")}
        color="#5C3C8B"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5C3C8B",
    padding: 20,
  },
  title: {
    color: "#FFF",
    fontSize: 50,
    fontFamily: "JosefinSans_700Bold",
    marginBottom: 50,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    paddingVertical: 10,
  },
  loginButton: {
    backgroundColor: "#E0DBE8",
    paddingVertical: 15,
  },
  signupButton: {
    borderColor: "#fff",
    borderWidth: 3,
    paddingVertical: 15,
  },
});

export default WelcomeScreen;
