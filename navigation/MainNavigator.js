import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useAuth } from "../context/AuthContext";

// header
import CustomHeader from "../components/CustomHeader";

// Imported screens
import WelcomeScreen from "../screens/auth/WelcomeScreen";
import LogInScreen from "../screens/auth/LogInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import TravelPhrasesScreen from "../screens/phrases/TravelPhrasesScreen";
import AirportPhrasesScreen from "../screens/phrases/AirportPhrasesScreen";
import RestaurantPhrasesScreen from "../screens/phrases/RestaurantPhrasesScreen";
import TransportPhrasesScreen from "../screens/phrases/TransportPhrasesScreen";
import GroceriesPhrasesScreen from "../screens/phrases/GroceriesPhrasesScreen";
import ChatScreen from "../screens/ChatScreen";
import TextScreen from "../screens/TextScreen";

// Tab menu
import { TabNavigator } from "./TabNavigator";

// Create a navigation stack
const Stack = createNativeStackNavigator();

// Stack Navigator for Home
// I place the component for home as TabNavigator, so only home will have the Tab Menu
export function MainNavigator() {
  const { user, handleLogout } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ header: () => <CustomHeader /> }}>
      {user ? (
        <>
          <Stack.Screen name="HomeScreen">
            {() => (
              <TabNavigator user={user} handleAuthentication={handleLogout} />
            )}
          </Stack.Screen>
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
          <Stack.Screen name="TextScreen" component={TextScreen} />
          {/* <Stack.Screen name="VoiceScreen" component={TextScreen} /> */}
          {/* <Stack.Screen name="CameraScreen" component={CameraScreen} /> */}
          <Stack.Screen name="TravelPhrases" component={TravelPhrasesScreen} />
          <Stack.Screen
            name="AirportPhrases"
            component={AirportPhrasesScreen}
          />
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
        </>
      ) : (
        <>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {(props) => <LogInScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="SignUp" options={{ headerShown: false }}>
            {(props) => <SignUpScreen {...props} />}
          </Stack.Screen>
        </>
      )}
    </Stack.Navigator>
  );
}
