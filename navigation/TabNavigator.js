import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import CustomTabBar from "../components/CustomTabBar";
import ProfileScreen from "../screens/ProfileScreen";

// Mocked screens for future tab screens
const MockScreenFav = () => <></>;

const Tab = createBottomTabNavigator();

// Tab Menu using bottom-tabs
export function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      {/* Defined tab screens */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favourites" component={MockScreenFav} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
