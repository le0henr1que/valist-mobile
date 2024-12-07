import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import ClockIcon from "../../../assets/icons/clock";
import StoreIcon from "../../../assets/icons/store";
import UserIcon from "../../../assets/icons/user";
import LogoIcon from "../../../assets/icons/logo";
import InformationIcon from "../../../assets/icons/information";
import BellIcon from "../../../assets/icons/bell";
import Expirations from "./screens/expirations";
import MyStore from "./screens/my-store";
import Profile from "./screens/profile";
import ExpirationsRoute from "./screens/expirations/expirations.route";

const Tab = createBottomTabNavigator();

export type RootStackParamList = {
  [key: string]: undefined;
};

export default function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
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
        headerStyle: {
          shadowColor: "transparent",
          elevation: 0,
          borderWidth: 1,
          borderColor: "#E5E7EB",
        },
        headerTitle: () => (
          <View style={{ padding: 0 }}>
            <LogoIcon />
          </View>
        ),
        headerRight: () => (
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 12,
              paddingRight: 20,
            }}
          >
            <InformationIcon size={40} />
            <BellIcon size={40} />
          </View>
        ),
      })}
    >
      <Tab.Screen name="Vencimentos" component={ExpirationsRoute} />
      <Tab.Screen name="Minha Loja" component={MyStore} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
}
