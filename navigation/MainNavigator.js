import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "../components/CustomTabBar";
import CustomHeader from "../components/CustomHeader";

// Imported screens
import HomeScreen from "../screens/HomeScreen";
import TravelPhrasesScreen from "../screens/TravelPhrasesScreen";
import AirportPhrasesScreen from "../screens/AirportPhrasesScreen";
import RestaurantPhrasesScreen from "../screens/RestaurantPhrasesScreen";
import TransportPhrasesScreen from "../screens/TransportPhrasesScreen";
import GroceriesPhrasesScreen from "../screens/GroceriesPhrasesScreen";
import ChatScreen from "../screens/ChatScreen";

// Create a navigation stack
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Mocked screens for future tab screens
const MockScreenFav = () => <></>;
const MockScreenSet = () => <></>;
const MockScreenHelp = () => <></>;

// Tab Menu using bottom-tabs
function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      {/* Defined tab screens */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favourites" component={MockScreenFav} />
      <Tab.Screen name="Settings" component={MockScreenSet} />
      <Tab.Screen name="Help" component={MockScreenHelp} />
    </Tab.Navigator>
  );
}

// Stack Navigator for Home
// I place the component for home as TabNavigator, so only home will have the Tab Menu
export function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ header: () => <CustomHeader /> }}>
      <Stack.Screen name="HomeScreen" component={TabNavigator} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="TravelPhrases" component={TravelPhrasesScreen} />
      <Stack.Screen name="AirportPhrases" component={AirportPhrasesScreen} />
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
  );
}
