import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Button } from "@rneui/themed";

const LogInScreen = ({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Log In" onPress={handleLogin} style={styles.button} />
      </View>
      <View>
        <Text style={styles.loginText}>
          Need an account?{" "}
          <Text
            style={styles.loginLink}
            onPress={() => navigation.navigate("SignUp")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0DBE8",
    padding: 20,
  },
  title: {
    color: "#5C3C8B",
    fontFamily: "Poppins_700Bold",
    fontSize: 30,
    marginBottom: 10,
    width: "100%",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 30,
    color: "#5C3C8B",
    fontFamily: "Poppins_400Regular",
    marginBottom: 28,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 60,
    borderColor: "#4C1D95",
    backgroundColor: "#fff",
    fontFamily: "Poppins_400Regular",
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 25,
    marginBottom: 20,
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 20,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#6B21A8",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginText: {
    color: "#5C3C8B",
    fontFamily: "Poppins_400Regular",
    fontSize: 20,
  },
  loginLink: {
    color: "#5C3C8B",
    fontFamily: "Poppins_700Bold",
  },
});

export default LogInScreen;
