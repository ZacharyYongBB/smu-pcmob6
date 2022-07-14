import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FunScreen from "../screens/FunScreen";
import { darkStyles, lightStyles } from "../styles/commonStyles";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

export default function FunStack() {
  const isDark = useSelector((state) => state.accountPrefs.isDark);
  const styles = isDark ? darkStyles : lightStyles;

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={FunScreen}
        name="Fun"
        options={{
          title: "Fun stuffs here",
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
}