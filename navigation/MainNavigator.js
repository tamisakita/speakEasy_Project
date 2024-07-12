import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth";
import { initializeApp } from "@firebase/app";
import { firebaseConfig } from "../config/firebaseConfig";
import CustomHeader from "../components/CustomHeader";

// Imported screens
import AuthScreen from "../screens/auth/AuthScreen";
import TravelPhrasesScreen from "../screens/phrases/TravelPhrasesScreen";
import AirportPhrasesScreen from "../screens/phrases/AirportPhrasesScreen";
import RestaurantPhrasesScreen from "../screens/phrases/RestaurantPhrasesScreen";
import TransportPhrasesScreen from "../screens/phrases/TransportPhrasesScreen";
import GroceriesPhrasesScreen from "../screens/phrases/GroceriesPhrasesScreen";
import ChatScreen from "../screens/ChatScreen";
import TextScreen from "../screens/TextScreen";

import { TabNavigator } from "./TabNavigator";

// Create a navigation stack
const Stack = createNativeStackNavigator();

const app = initializeApp(firebaseConfig);

// Stack Navigator for Home
// I place the component for home as TabNavigator, so only home will have the Tab Menu
export function MainNavigator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null); // Track user authentication state
  const [isLogin, setIsLogin] = useState(true);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleAuthentication = async () => {
    try {
      if (user) {
        // If user is already authenticated, log out
        console.log("User logged out successfully!");
        await signOut(auth);
      } else {
        // Sign in or sign up
        if (isLogin) {
          // Sign in
          await signInWithEmailAndPassword(auth, email, password);
          console.log("User signed in successfully!");
        } else {
          // Sign up
          await createUserWithEmailAndPassword(auth, email, password);
          console.log("User created successfully!");
        }
      }
    } catch (error) {
      console.error("Authentication error:", error.message);
    }
  };

  return (
    <Stack.Navigator screenOptions={{ header: () => <CustomHeader /> }}>
      {user ? (
        <>
          <Stack.Screen name="HomeScreen" component={TabNavigator} />
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
          <Stack.Screen name="Auth">
            {() => (
              <AuthScreen
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                handleAuthentication={handleAuthentication}
              />
            )}
          </Stack.Screen>
        </>
      )}
    </Stack.Navigator>
  );
}
