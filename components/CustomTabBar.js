import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";

// Custom tab bar component
export default function CustomTabBar({ state, descriptors, navigation }) {
  // Define icons for each tab
  const icons = {
    Home: faHome,
    Favourites: faHeart,
    Profile: faUser,
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          // Destructure options from the routes descriptors
          const { options } = descriptors[route.key];

          // Determine the label for the tab
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          // Check if the current tab is focused
          const isFocused = state.index === index;

          // Get the icon for the current tab
          const icon = icons[route.name];

          // Handle tab press
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={styles.tabBarItem}
            >
              {/* Render the icon */}
              <FontAwesomeIcon
                icon={icon}
                size={26}
                color={isFocused ? "#673ab7" : "#222"}
              />
              {/* Render the label */}
              <Text
                style={{
                  color: isFocused ? "#673ab7" : "#222",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 15,
                  paddingTop: 4,
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

// Styles for the custom tab bar
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#E0DBE8",
  },
  tabBar: {
    flexDirection: "row",
    height: 80,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  tabBarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
