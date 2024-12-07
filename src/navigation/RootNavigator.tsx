// navigation/RootNavigator.tsx
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RegisterCode from "../screens/ConfirmCode";
import DetailsScreen from "../screens/DetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import BarcodeScannerApp from "../screens/HomeScreen/screens/expirations/components/BarCord";
import InformationStore from "../screens/InformationStore";
import Login from "../screens/LoginPage";
import NewPassword from "../screens/NewPassword";
import OnboardingScreen from "../screens/OnBoarding";
import Register from "../screens/RegisterPage";
import ResetPassword from "../screens/ResetPassword";

const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

export default function RootNavigator() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator initialRouteName="OnBoarding">
          <Stack.Screen
            name="OnBoarding"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={HomeScreen}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen
            name="Login"
            component={Login}
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
            name="BarcodeScannerApp"
            component={BarcodeScannerApp}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ConfirmCode"
            component={RegisterCode}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InformationStore"
            component={InformationStore}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
