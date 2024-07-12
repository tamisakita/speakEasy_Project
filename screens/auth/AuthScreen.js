import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const AuthScreen = ({
  email,
  setEmail,
  password,
  setPassword,
  isLogin,
  setIsLogin,
  handleAuthentication,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel, Talk, Connect!</Text>
      <Text style={styles.subtitle}>Join SpeakEasy Today!</Text>
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
        <Button
          title={isLogin ? "Log In" : "Sign Up"}
          onPress={handleAuthentication}
          style={styles.button}
        ></Button>
      </View>

      <View>
        <Text style={styles.loginText} onPress={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Need an account? Sign Up"
            : "Already have an account? Log In"}
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
    backgroundColor: "#EAEAEA",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4C1D95",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#6B21A8",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#4C1D95",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 16,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#6B21A8",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginText: {
    color: "#000",
  },
  loginLink: {
    color: "#6B21A8",
    fontWeight: "bold",
  },
});

export default AuthScreen;
