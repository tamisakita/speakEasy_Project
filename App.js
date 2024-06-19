import * as React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Imported components for navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Imported custom theme
import { ThemeProvider } from "@rneui/themed";
import { seTheme } from "./themes/seTheme";

// Imported fonts
import { useFonts } from "expo-font";
import { JosefinSans_700Bold } from "@expo-google-fonts/josefin-sans";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

// Imported components for each screen
import HomeScreen from "./screens/HomeScreen";
import CustomHeader from "./components/CustomHeader";
import TravelPhrasesScreen from "./screens/TravelPhrasesScreen";
import AirportPhrases from "./screens/AirportPhrasesScreen";
import RestaurantPhrasesScreen from "./screens/RestaurantPhrasesScreen";
import TransportPhrasesScreen from "./screens/TransportPhrasesScreen";
import GroceriesPhrasesScreen from "./screens/GroceriesPhrasesScreen";

// Create a navigation stack
const Stack = createNativeStackNavigator();

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
      {/* ThemeProvider to apply a custom theme (seTheme) throughout the app */}
      <ThemeProvider theme={seTheme}>
        <NavigationContainer>
          {/* Stack.Navigator manages the navigation stack with screens */}
          {/* Since all screens have the same header, I set the header on the screenOptions */}
          <Stack.Navigator screenOptions={{ header: () => <CustomHeader /> }}>
            {/* Stack.Screen contains two props: name (name of the route) and component (the component of the route) */}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="TravelPhrases"
              component={TravelPhrasesScreen}
            />
            <Stack.Screen name="AirportPhrases" component={AirportPhrases} />
            <Stack.Screen
              name="RestaurantPhrases"
              component={RestaurantPhrasesScreen}
            />
            <Stack.Screen
              name="TransportPhrases"
              component={TransportPhrasesScreen}
            />
            <Stack.Screen
              name="GroceriesPhrases"
              component={GroceriesPhrasesScreen}
            />
          </Stack.Navigator>
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
