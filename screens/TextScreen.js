import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Voice from "@react-native-voice/voice";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { faArrowRight, faMicrophone } from "@fortawesome/free-solid-svg-icons";

import { getLanguageOption } from "../data/language-options-data";

import { getTranslationText } from "../api/googleCloud";

export default function TextScreen() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("pt");

  const [result, setResult] = useState([]);

  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const handleTranslate = async () => {
    if (inputText) {
      const translation = await getTranslationText(inputText, targetLanguage);
      setTranslatedText(translation);
    }
  };

  const startVoiceInput = async () => {
    try {
      await Voice.start("en-US");
      setIsListening(true);
    } catch (e) {
      console.error(e);
    }
  };

  const stopVoiceInput = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleVoiceInput = () => {
    console.log("Voice input button pressed");
    if (isListening) {
      stopVoiceInput();
    } else {
      startVoiceInput();
    }
  };

  const onSpeechResults = (result) => {
    setResult(result.value);
  };

  const onSpeechError = (error) => {
    console.log(error);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Text"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
        onSubmitEditing={handleTranslate}
        returnKeyType="go"
      />
      {result.map((result, index) => (
        <Text key={index}>{result}</Text>
      ))}
      <View style={styles.languageContainer}>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={sourceLanguage}
            onValueChange={(itemValue) => setSourceLanguage(itemValue)}
          >
            {getLanguageOption().map((option) => (
              <Picker.Item
                key={option.value}
                label={option.label}
                value={option.value}
              />
            ))}
          </Picker>
        </View>
        <FontAwesomeIcon icon={faArrowRight} size={24} color="#5C3C8B" />

        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={targetLanguage}
            onValueChange={(itemValue) => setTargetLanguage(itemValue)}
          >
            {getLanguageOption().map((option) => (
              <Picker.Item
                key={option.value}
                label={option.label}
                value={option.value}
              />
            ))}
          </Picker>
        </View>
      </View>
      <TextInput
        style={styles.input}
        value={translatedText}
        editable={false}
        placeholder="Translation will appear here"
      />

      {isListening ? (
        <TouchableOpacity style={styles.voiceButton} onPress={handleVoiceInput}>
          stop!
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.voiceButton} onPress={handleVoiceInput}>
          <FontAwesomeIcon icon={faMicrophone} size={35} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E0DBE8",
  },
  input: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#fff",
    fontFamily: "Poppins_400Regular",
    fontSize: 20,
    marginBottom: 20,
  },
  languageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  pickerContainer: {
    width: "44%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 25,
    overflow: "hidden",
  },
  picker: {
    width: "100%",
    height: "100%",
  },
  voiceButton: {
    position: "absolute",
    bottom: 40,
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#5C3C8B",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
