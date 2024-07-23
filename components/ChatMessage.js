import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";

const ChatMessage = ({ message, sender }) => {
  // checking if the sender is the user or the bot to change the colour of the background, position and text colour
  const isUser = sender === "Camila";

  return (
    <View
      style={[
        styles.messageContainer,
        isUser ? styles.userMessage : styles.botMessage,
        { backgroundColor: isUser ? "#FFF" : "#5C3C8B" },
      ]}
    >
      <Text style={[styles.sender, { color: isUser ? "#000" : "#FFF" }]}>
        {sender}
      </Text>
      <Text style={{ color: isUser ? "#000" : "#FFF" }}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    maxWidth: "75%",
    alignSelf: "flex-start",
  },
  userMessage: {
    borderTopLeftRadius: 0,
    alignSelf: "flex-start",
  },
  botMessage: {
    borderTopRightRadius: 0,
    alignSelf: "flex-end",
  },
  sender: {
    marginBottom: 5,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
  },
});

export default ChatMessage;
