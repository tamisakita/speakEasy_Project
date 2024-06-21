import * as React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Imported components for navigation
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";
import { useFonts } from "expo-font";
import { JosefinSans_700Bold } from "@expo-google-fonts/josefin-sans";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

// Custom theme
import { seTheme } from "./themes/seTheme";

// Navigation setup
import { MainNavigator } from "./navigation/MainNavigator";

export default function App() {
  // Load fonts asynchronously
  let [fontsLoaded] = useFonts({
    JosefinSans_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  // Render a loading indicator until fonts are loaded
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#b9c8ff" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={seTheme}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
