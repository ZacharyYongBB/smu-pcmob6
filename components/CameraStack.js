import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import CameraScreen from "../screens/CameraScreen";
import { darkStyles, lightStyles } from "../styles/commonStyles";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

export default function CameraStack() {
  const isDark = useSelector((state) => state.accountPrefs.isDark);
  const styles = isDark ? darkStyles : lightStyles;

  return (
    <Stack.Navigator>
        <Stack.Screen
          component={CameraScreen}
          name="CameraScreen"
          options={{
            title: "Take a photo",
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            headerTintColor: styles.headerTint,
          }}
        />
    </Stack.Navigator>
  );
}