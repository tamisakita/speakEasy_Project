import * as React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import CustomHeader from "./components/CustomHeader";
import TravelPhrasesScreen from "./screens/TravelPhrasesScreen";
import AirportPhrases from "./screens/AriportPhrasesScreen";

import { ThemeProvider } from "@rneui/themed";
import { seTheme } from "./themes/seTheme";

import { useFonts } from "expo-font";
import { JosefinSans_700Bold } from "@expo-google-fonts/josefin-sans";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    JosefinSans_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

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
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                header: () => <CustomHeader />,
              }}
            />
            <Stack.Screen
              name="TravelPhrases"
              component={TravelPhrasesScreen}
              options={{
                header: () => <CustomHeader />,
              }}
            />
            <Stack.Screen
              name="AirportPhrases"
              component={AirportPhrases}
              options={{
                header: () => <CustomHeader />,
              }}
            />
          </Stack.Navigator>
          {/* <Tab.Navigator></Tab.Navigator> */}
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
