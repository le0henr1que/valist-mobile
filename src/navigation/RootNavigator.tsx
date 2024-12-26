// navigation/RootNavigator.tsx
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RegisterCode from "../screens/ConfirmCode";
import DetailsScreen from "../screens/DetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import InformationStore from "../screens/InformationStore";
import Login from "../screens/LoginPage";
import NewPassword from "../screens/NewPassword";
import OnboardingScreen from "../screens/OnBoarding";
import Register from "../screens/RegisterPage";
import ResetPassword from "../screens/ResetPassword";
import AddBatch from "../screens/AddBatch";
import AddProduct from "../screens/AddProduct";
import ViewProduct from "../screens/ViewProduct";
import ViewBatch from "../screens/ViewBatch";
import BarcodeScannerApp from "../screens/ScamProduct";
import EditProduct from "../screens/EditProduct";
import EditBatch from "../screens/EditBatch";
import Notification from "../screens/Notification";
import DeleteStore from "../screens/DeleteStore";
import ManageStore from "../screens/ManageStores";
import ManageMembers from "../screens/ManageMembers";
import ManageProviders from "../screens/ManageProviders";
import EditDataStore from "../screens/EditDataStore";
import ManageStores from "../screens/ManageStores";
import ExportReport from "../screens/ExportReport";

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
            name="EditProduct"
            component={EditProduct}
            options={{ title: "Editar Produto" }}
          />
          <Stack.Screen
            name="EditBatch"
            component={EditBatch}
            options={{ title: "Editar Lote" }}
          />
          <Stack.Screen
            name="ViewProduct"
            component={ViewProduct}
            options={{ title: "Ver Produto" }}
          />
          <Stack.Screen
            name="BarcodeScannerApp"
            component={BarcodeScannerApp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ViewBatch"
            component={ViewBatch}
            options={{ title: "Ver Lote" }}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{ title: "Ver Lote", headerShown: false }}
          />
          <Stack.Screen
            name="DeleteStore"
            component={DeleteStore}
            options={{ title: "Excluir Loja", headerShown: true }}
          />
          <Stack.Screen
            name="ManageStores"
            component={ManageStores}
            options={{ title: "Excluir Loja", headerShown: true }}
          />
          <Stack.Screen
            name="ManageMembers"
            component={ManageMembers}
            options={{ title: "Excluir Loja", headerShown: true }}
          />
          <Stack.Screen
            name="ManageProviders"
            component={ManageProviders}
            options={{ title: "Excluir Loja", headerShown: true }}
          />
          <Stack.Screen
            name="ExportReport"
            component={ExportReport}
            options={{ title: "Excluir Loja", headerShown: false }}
          />
          <Stack.Screen
            name="EditStore"
            component={EditDataStore}
            options={{ title: "Excluir Loja", headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
