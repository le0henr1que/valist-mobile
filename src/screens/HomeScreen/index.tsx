import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

// Importar as telas
// import VencimentosScreen from "./screens/VencimentosScreen";
// import MinhaLojaScreen from "./screens/MinhaLojaScreen";
// import PerfilScreen from "./screens/PerfilScreen";

const Tab = createBottomTabNavigator();

export type RootStackParamList = {
  [key: string]: undefined;
};

export default function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: any;
          if (route.name === "Vencimentos") {
            iconName = "calendar";
          } else if (route.name === "Minha Loja") {
            iconName = "storefront";
          } else if (route.name === "Perfil") {
            iconName = "person";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "gray",
        headerShown: false, // Oculta o cabeçalho padrão
      })}
    >
      <Tab.Screen name="Vencimentos" component={Vencimento} />
      <Tab.Screen name="Minha Loja" component={MinhaLoja} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

function Vencimento() {
  return (
    <View>
      <Text>Home Screen 1</Text>
    </View>
  );
}

function MinhaLoja() {
  return (
    <View>
      <Text>Home Screen 2</Text>
    </View>
  );
}

function Perfil() {
  return (
    <View>
      <Text>Home Screen 3</Text>
    </View>
  );
}
