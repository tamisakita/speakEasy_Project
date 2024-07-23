import React, { createContext, useContext, useEffect, useState } from "react";

// importing firebase initialization functions
import { initializeApp } from "@firebase/app";
import {
  getReactNativePersistence,
  initializeAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
// importing asyncstorage for persistence
import AsyncStorage from "@react-native-async-storage/async-storage";
// importing firebase configuration
import { firebaseConfig } from "../config/firebaseConfig";

// initialize Firebase app
const app = initializeApp(firebaseConfig);
// initialize Firebase auth for persistence where the users auth state maintain between sessions
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// creating context to manage and share auth thought the app
const AuthContext = createContext();

// component that contains functions that will handle authenticantion
export const AuthProvider = ({ children }) => {
  // I used the hook useState to manage the current user state
  const [user, setUser] = useState(null);

  // used useEffect to update the state of the user when the auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully!");
      return true;
    } catch (error) {
      console.error("Login error:", error.message);
      return false;
    }
  };

  const handleSignUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created successfully!");
      return true;
    } catch (error) {
      console.error("Sign up error:", error.message);
      return false;
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  // return the AuthContext provider with the current user and auth functions and wrap the content with it
  return (
    <AuthContext.Provider
      value={{ user, handleLogin, handleSignUp, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
