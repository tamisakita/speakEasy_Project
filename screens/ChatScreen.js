import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Alert } from "react-native";
import { Text } from "@rneui/themed";
import { getOpenaiService } from "../api/openAi";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";

const ChatScreen = () => {
  // creating a hook to update the messages on the chat
  // initializing initial message from the chat with the hook useState
  const [messages, setMessages] = useState([
    {
      sender: "SpeakEasy",
      message: "Welcome, Camila! How can I assist you today?",
    },
  ]);

  // function to handle sending a message
  const handleSend = async (message) => {
    const userMessage = { sender: "Camila", message };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const botResponse = await getOpenaiService(message);
      const botMessage = { sender: "SpeakEasy", message: botResponse };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      Alert.alert(
        "Error",
        "Failed to communicate with SpeakEasy Chat. Please try again later."
      );
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text h2 style={styles.title}>
        Live Chat
      </Text>
      <ScrollView
        style={styles.chatContainer}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
      >
        {/* mapping over the messages array to render each message using the ChatMessage component */}
        {messages.map((msg, index) => (
          <ChatMessage key={index} sender={msg.sender} message={msg.message} />
        ))}
      </ScrollView>
      <ChatInput onSend={handleSend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0DBE8",
  },
  title: {
    textAlign: "center",
    marginVertical: 10,
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default ChatScreen;
