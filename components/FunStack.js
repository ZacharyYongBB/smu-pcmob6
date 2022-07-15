import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CalendarScreen from "../screens/CalendarScreen";
import { darkStyles, lightStyles } from "../styles/commonStyles";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

export default function CalendarStack() {
  const isDark = useSelector((state) => state.accountPrefs.isDark);
  const styles = isDark ? darkStyles : lightStyles;

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={CalendarScreen}
        name="Calendar"
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