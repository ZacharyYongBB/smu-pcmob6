import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CalenderScreen from "../screens/CalenderScreen";
import { darkStyles, lightStyles } from "../styles/commonStyles";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

export default function CalenderStack() {
  const isDark = useSelector((state) => state.accountPrefs.isDark);
  const styles = isDark ? darkStyles : lightStyles;

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={CalenderScreen}
        name="Calender"
        options={{
          title: "Plan your workout!",
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
}