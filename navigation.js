import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import SignInScreen from "./client/views/SignInScreen";
import SignUpScreen from "./client/views/SignUpScreen";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Log in"
          component={SignInScreen}
          options={{ title: "Log In" }}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUpScreen}
          options={{ title: "Register" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
