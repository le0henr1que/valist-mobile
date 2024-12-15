import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import ClockIcon from "../../../assets/icons/clock";
import StoreIcon from "../../../assets/icons/store";
import UserIcon from "../../../assets/icons/user";
import ExpirationsRoute from "./screens/expirations/expirations.route";
import MyStore from "./screens/my-store";
import Profile from "./screens/profile";

const Tab = createBottomTabNavigator();

export type RootStackParamList = {
  [key: string]: undefined;
};

export default function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Vencimentos: <ClockIcon color={color} size={size} />,
            "Minha Loja": <StoreIcon color={color} size={size} />,
            Perfil: <UserIcon color={color} size={size} />,
          };
          return icons[route.name as keyof typeof icons];
        },
        tabBarActiveTintColor: "#0D9488",
        tabBarInactiveTintColor: "gray",

        tabBarStyle: {
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 0,
          borderColor: "transparent",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          lineHeight: 16,
          fontWeight: "medium",
          borderWidth: 0,
          borderColor: "transparent",
        },
      })}
    >
      <Tab.Screen name="Vencimentos" component={ExpirationsRoute} />
      <Tab.Screen name="Minha Loja" component={MyStore} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
}
