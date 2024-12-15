import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Expirations from "./index";

const Stack = createNativeStackNavigator();

export default function ExpirationsRoute() {
  return (
    <Stack.Navigator initialRouteName="Expirations">
      <Stack.Screen
        name="Expirations"
        component={Expirations}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
