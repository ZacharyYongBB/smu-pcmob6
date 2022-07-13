import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BlogStack from "../components/BlogStack";
import AccountStack from "../components/AccountStack";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

export default function LoggedInTabStack() {
  const isDark = useSelector((state) => state.accountPrefs.isDark);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: isDark ? "#f4d47c" : "#f4d47c",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: isDark ? "#181818" : "white",
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Workouts") {
            iconName = "dribbble";
          } else if (route.name === "Settings") {
            iconName = "cog";
          }
          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Workouts" component={BlogStack} />
      <Tab.Screen name="Settings" component={AccountStack} />
    </Tab.Navigator>
  );
}