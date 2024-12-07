import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Expirations from "./index";
import AddProduct from "./screens/add-product";
import ViewProduct from "./screens/view-product";
import ViewBatch from "./screens/view-batch";
import AddBatch from "./screens/add-batch";

const Stack = createNativeStackNavigator();

export default function ExpirationsRoute() {
  return (
    <Stack.Navigator initialRouteName="Expirations">
      <Stack.Screen
        name="Expirations"
        component={Expirations}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddBatch"
        component={AddBatch}
        options={{ title: "Adicionar Lote" }}
      />
      <Stack.Screen
        name="AddProduct"
        component={AddProduct}
        options={{ title: "Adicionar Produto" }}
      />
      <Stack.Screen
        name="ViewProduct"
        component={ViewProduct}
        options={{ title: "Ver Produto" }}
      />
      <Stack.Screen
        name="ViewBatch"
        component={ViewBatch}
        options={{ title: "Ver Lote" }}
      />
    </Stack.Navigator>
  );
}
