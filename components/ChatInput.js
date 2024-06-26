import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message.trim());
      setMessage("");
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        placeholderTextColor={"#000"}
      />
      <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
        <FontAwesomeIcon icon={faMicrophone} size={24} color={"#000"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    borderRadius: 50,
    margin: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    height: 40,
    fontFamily: "Poppins_400Regular",
  },
  sendButton: {
    padding: 10,
  },
});

export default ChatInput;
