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

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User Loged in successfully!");
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created successfully!");
    } catch (error) {
      console.error("Sign up error:", error.message);
    }
  };

  return (
    <Stack.Navigator screenOptions={{ header: () => <CustomHeader /> }}>
      {user ? (
        <>
          <Stack.Screen name="HomeScreen">
            {() => (
              <TabNavigator
                user={user}
                handleAuthentication={async () => {
                  await signOut(auth);
                  console.log("User logged out successfully!");
                }}
              />
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
            {(props) => (
              <LogInScreen
                {...props}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="SignUp" options={{ headerShown: false }}>
            {(props) => (
              <SignUpScreen
                {...props}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSignUp={handleSignUp}
              />
            )}
          </Stack.Screen>
        </>
      )}
    </Stack.Navigator>
  );
}
