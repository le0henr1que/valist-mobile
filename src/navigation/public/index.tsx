import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../../screens/OnBoarding";
import Login from "../../screens/LoginPage";
import Register from "../../screens/RegisterPage";
import ResetPassword from "../../screens/ResetPassword";
import NewPassword from "../../screens/NewPassword";
import RegisterCode from "../../screens/ConfirmCode";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import InformationStore from "../../screens/InformationStore";

const Stack = createNativeStackNavigator();

export default function PublicRoute() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName="OnBoarding">
        <Stack.Screen
          name="OnBoarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InformationStore"
          component={InformationStore}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConfirmCode"
          component={RegisterCode}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
}
