import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import CustomTabBar from "../components/CustomTabBar";
import ProfileScreen from "../screens/ProfileScreen";
import FavouritesScreen from "../screens/FavouritesScreen";

const Tab = createBottomTabNavigator();

// Tab Menu using bottom-tabs
export function TabNavigator({ user, handleAuthentication }) {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      {/* Defined tab screens */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Profile">
        {() => (
          <ProfileScreen
            user={user}
            handleAuthentication={handleAuthentication}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
