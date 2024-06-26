import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Alert } from "react-native";
import { Text } from "@rneui/themed";
import { getOpenaiService } from "../service/openaiService";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      sender: "SpeakEasy",
      message: "Welcome, Camila! How can I assist you today?",
    },
  ]);

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
        "Failed to communicate with OpenAI. Please try again later."
      );
      console.error("Error communicating with OpenAI:", error);
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
    marginVertical: 20,
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default ChatScreen;
